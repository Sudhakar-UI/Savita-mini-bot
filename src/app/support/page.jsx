"use client";
import React, { useState, useRef } from 'react'
import { Button, Container, Form, Modal, ModalBody, ModalHeader, ModalTitle, ModalFooter } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faComment } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { useTheme } from "../context/ThemeContext";


import { faBars, faChevronLeft, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const ticketRows = [
  {
    id: "UI5658178",
    status: "Closed",
    title:
      "How to use",
    date: "11-12-2025",
  },
  {
    id: "UI5658178",
    status: "Closed",
    title:
      "How to use",
    date: "11-12-2025",
  },
];

export default function SupportPage() {



  const [showModal, setShowModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const { isNightMode } = useTheme();

  const handleClose = () => setShowModal(false);
  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (selectedFile) {
      URL.revokeObjectURL(selectedFile.previewUrl);
    }

    setSelectedFile({
      name: file.name,
      previewUrl: URL.createObjectURL(file),
    });
  };
  const handleFileRemove = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (selectedFile) {
      URL.revokeObjectURL(selectedFile.previewUrl);
    }

    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="support-page">
      <Container className="support-container">


        <div className="support-create-row">
          <Button className="support-create-btn" onClick={() => handleOpenDrawer(true)}>
            <span className="support-plus-wrap">
              <FontAwesomeIcon icon={faPlus} />
            </span>
            Create ticket
          </Button>
        </div>

        <div className="support-search-wrap">
          <Form.Control type="text" placeholder="Search" className="support-search" />
        </div>

        <div className="support-ticket-list">
          {ticketRows.map((ticket, index) => (
            <div className="support-ticket-item" key={`${ticket.id}-${index}`}>
                <div className="support-ticket-row support-ticket-action-row pt-0">
                <Link href="/chat" className="ms-auto chat-nex-x" type="button">
                 <span> <FontAwesomeIcon icon={faComment} /> </span> Chat
                </Link>
              </div>
              <div className=' d-flex align-items-center justify-content-between pt-2'>
                <div className="support-ticket-head">
                  <span className="support-ticket-id-head">Ticket ID</span> <br />
                  <span className="support-ticket-id"> {ticket.id}</span>
                </div>
                <div className="support-ticket-head text-end">
                  <span className="support-ticket-id-head text-end">subject</span> <br />
                  <span className="support-ticket-id text-end"> {ticket.title}</span>
                </div>
              </div>
              <div className=' d-flex align-items-center justify-content-between'>
                <div className="support-ticket-head mb-0">
                  <span className="support-ticket-id-head">Status</span> <br />
                  <span className={`support-ticket-status mb-0 ${ticket.status.toLowerCase()}`}> {ticket.status}</span>
                </div>
                <div className="support-ticket-head text-end mb-0">
                  <span className="support-ticket-id-head text-end">Created Date</span> <br />
                  <span className="support-ticket-id text-end mb-0"> {ticket.date}</span>
                </div>
              </div>

             

            
            </div>
          ))}
        </div>
      </Container>

      <div className={`phone-draw-overlay ${openDrawer ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
      <div className={`phone-draw ${openDrawer ? 'open' : ''}`}>
        <div className="phone-draw-handle"></div>
        <div className="text-center">
          <div className="phone-draw-close">
            <Button onClick={handleCloseDrawer} className="phone-draw-close-btn">
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
          <h2 className="heading">Create Ticket</h2>

        </div>
        <div className='px-2'>
          <Form.Group className="support-form-group">
            <Form.Label className="support-field-label">Title</Form.Label>
            <Form.Control type="text" className="support-input" />
          </Form.Group>

          <Form.Group className="support-form-group">
            <Form.Label className="support-field-label">Message</Form.Label>
            <Form.Control as="textarea" rows={5} className="support-input support-textarea" />
          </Form.Group>

          <Form.Group className="support-form-group">
            <Form.Label className="support-field-label">Attachment</Form.Label>
            <Form.Label htmlFor="support-attachment" className="support-dropzone">
              {selectedFile ? (
                <div className="selected-file-preview">
                  <div className="selected-file-name">
                    {selectedFile.name}
                    <button
                      type="button"
                      className="remove-selected-file"
                      onClick={handleFileRemove}
                      aria-label="Remove selected attachment"
                    >
                      ×
                    </button>
                  </div>
                  <img src={selectedFile.previewUrl} alt="Selected attachment" />
                </div>
              ) : (
                'Click or drag and drop a file here'
              )}
            </Form.Label>
            <Form.Control
              ref={fileInputRef}
              id="support-attachment"
              type="file"
              accept="image/*"
              className="d-none"
              onChange={handleFileChange}
            />
          </Form.Group>

          <p className="support-upload-note">(Maximum file upload size: 10M)</p>

          <Button className="sitebtn mt-3" type="button">
            Send New Ticket
          </Button>
        </div>


      </div>

      {/* <Modal
        show={showCreateTicket}
        onHide={() => setShowCreateTicket(false)}
        centered
        className="support-ticket-modal"
      >
        <Modal.Header className="support-modal-header">
          <Modal.Title className="support-modal-title">Create Ticket</Modal.Title>
          <button
            type="button"
            className="support-modal-close"
            onClick={() => setShowCreateTicket(false)}
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </Modal.Header>

        <Modal.Body className="support-modal-body">
          <Form.Group className="support-form-group">
            <Form.Label className="support-field-label">Title</Form.Label>
            <Form.Control type="text" className="support-input" />
          </Form.Group>

          <Form.Group className="support-form-group">
            <Form.Label className="support-field-label">Message</Form.Label>
            <Form.Control as="textarea" rows={5} className="support-input support-textarea" />
          </Form.Group>

          <Form.Group className="support-form-group">
            <Form.Label className="support-field-label">Attachment</Form.Label>
            <div className="support-dropzone">Click or drag and drop a file here</div>
          </Form.Group>

          <p className="support-upload-note">(Maximum file upload size: 10M)</p>

          <Button className="sitebtn mt-3" type="button">
            Send New Ticket
          </Button>
        </Modal.Body>
      </Modal> */}

    </div>
  );
}
