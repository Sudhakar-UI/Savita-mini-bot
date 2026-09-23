"use client";
 
import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import "../../../public/assets/css/bootstrap-slider.css";
 
const LeverageRangeSlider = forwardRef(function LeverageRangeSlider(
    { value = 0, maxLeverage = 100, onSliderChange, disabled = false },
    ref
) {
    const sliderRef = useRef(null);
    const sliderInstance = useRef(null);
    const isReady = useRef(false);
    const rafId = useRef(null);
    const latestValue = useRef(value);
    const maxLeverageRef = useRef(maxLeverage);
 
    useImperativeHandle(ref, () => ({
        relayout: () => {
            try {
                sliderInstance.current?.relayout?.();
            } catch (_) { }
        },
    }));
 
    const buildTickLabels = (max) => {
        const pcts = [0, 25, 50, 75, 100];
        const labels = pcts.map((p) => Math.max(1, Math.round((p / 100) * max)));
        // dedupe low-leverage collisions (e.g. max=3 -> [0,1,2,2,3])
        for (let i = 1; i < labels.length; i++) {
            if (labels[i] <= labels[i - 1]) labels[i] = labels[i - 1] + 1;
        }
        return labels.map((v) => `${v}x`);
    };
 
    useEffect(() => {
        let mounted = true;
 
        const init = async () => {
            const $ = (await import("jquery")).default;
            window.$ = $;
            window.jQuery = $;
 
            await import("../../../public/assets/js/bootstrap-slider.js");
            if (!mounted) return;
 
            const $el = $(sliderRef.current);
            $el.slider({
                min: 0,
                max: 100,
                step: 1,
                value: value || 0,
                ticks: [0, 25, 50, 75, 100],
                ticks_labels: buildTickLabels(maxLeverageRef.current),
                ticks_snap_bounds: 1,
                tooltip: "hide",
                formatter: (val) => `${Math.max(1, Math.round((val / 100) * maxLeverageRef.current))}`, // drag tooltip
            });
 
            sliderInstance.current = $el.data("slider");
            isReady.current = true;
 
            requestAnimationFrame(() => {
                sliderInstance.current?.relayout?.();
            });
 
            const commit = (val) => {
                latestValue.current = val;
                if (rafId.current) return;
                rafId.current = requestAnimationFrame(() => {
                    onSliderChange?.(latestValue.current);
                    rafId.current = null;
                });
            };
 
            $el.on("slide", (e) => commit(e.value));
 
            $el.on("slideStop", (e) => {
                if (rafId.current) {
                    cancelAnimationFrame(rafId.current);
                    rafId.current = null;
                }
                onSliderChange?.(e.value);
            });
 
            if (disabled) sliderInstance.current.disable();
        };
 
        init();
 
        return () => {
            mounted = false;
            if (rafId.current) cancelAnimationFrame(rafId.current);
            try {
                sliderInstance.current?.destroy?.();
            } catch (_) { }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 
    // external -> slider
    useEffect(() => {
        if (!isReady.current || !sliderInstance.current) return;
        const current = sliderInstance.current.getValue();
        const next = Number(value) || 0;
        if (current !== next) {
            sliderInstance.current.setValue(next, false);
        }
    }, [value]);
 
    // maxLeverage changed (e.g. user switched pair while modal is open) -> rebuild tick labels
    useEffect(() => {
        maxLeverageRef.current = maxLeverage;
        if (!isReady.current || !sliderInstance.current) return;
        sliderInstance.current.setAttribute("ticks_labels", buildTickLabels(maxLeverage));
        sliderInstance.current.setAttribute(
            "formatter",
            (val) => `${Math.max(1, Math.round((val / 100) * maxLeverage))}`
        );
        sliderInstance.current.refresh();
    }, [maxLeverage]);
 
    useEffect(() => {
        if (!isReady.current || !sliderInstance.current) return;
        if (disabled) sliderInstance.current.disable();
        else sliderInstance.current.enable();
    }, [disabled]);
 
    return (
        <div>
            <div className="form-group rangesliderbox">
                <input ref={sliderRef} type="text" className="rangeslider" />
            </div>
        </div>
    );
});
 
export default LeverageRangeSlider;
 