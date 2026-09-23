import React, { useEffect, useRef } from 'react'
import { Nav, Button, Image, Tab, Table } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowUp } from '@fortawesome/free-solid-svg-icons';


export const page = () => {

    useEffect(() => {
        const iframes = document.querySelectorAll('.tradechartlist iframe');

        iframes.forEach(iframe => {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const body = iframeDoc.body;
            body.classList.add('nightmode');
        });

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;

        script.onload = () => {
            new window.TradingView.widget({
                "autosize": true,
                "fullscreen": true,
                "symbol": "Binance:BTCUSD",
                "interval": "5",
                "timezone": "UTC",
                "toolbar_bg": "#fff",
                "theme": "dark",
                "style": "1",
                "locale": "en",
                "enable_publishing": false,
                "allow_symbol_change": false,
                "container_id": "tradingview_49396",
                "withdateranges": true,
                "hide_side_toolbar": false,
                "hide_legend": true
            });
        };
        document.body.appendChild(script);
    }, []);

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const container = scrollContainerRef.current;

        if (container) {
            // Smooth scroll to bottom
            container.scrollTo({
                top: container.scrollHeight,
                behavior: "smooth",
            });

            // Reverse <tr> elements in each <tbody>
            const tbodies = container.querySelectorAll("tbody");
            tbodies.forEach((tbody) => {
                const rows = Array.from(tbody.querySelectorAll("tr"));
                tbody.innerHTML = ""; // Clear
                rows.reverse().forEach((row) => {
                    tbody.appendChild(row);
                });
            });
        }
    }, []);

    function chartTab(event) {
        const element1 = document.getElementById("tradepage");
        if (element1) {
            element1.classList.toggle("chartactive");
        }
    }
    return (
        <div className="chart griddragoption mb-3 chart-none">
            <div id="user1" className="">
                <div className="contentbox mt-3">
                    <div eventKey="tradechart" className="tradechartlist">
                        <div className="tradingview-widget-container">
                            <div id="tradingview_49396"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default page;