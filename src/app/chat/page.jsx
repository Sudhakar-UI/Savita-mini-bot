"use client";

import { Button, Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ChatPage() {
  return (
    <div className="chat-page">
      <Container className="chat-container">
        <div className="chat-header">
          <div className="chat-id">#UI5658178</div>
          <div className="chat-status-pill">
            <span className="chat-status-dot" />
            Active
          </div>
        </div>

        <div className="chat-thread">
          <div className="chat-message-row incoming">
            <div className="chat-avatar chat-avatar-1">J</div>
            <div className="chat-bubble chat-bubble-light">
              <div className="chat-sender">John (Aug 10, 2025)</div>
              <div className="chat-text">
                Integer vitae turpis risus. Curabitur pretium id est sed feugiat. Etiam eu felis dui. Aenean pellentesque,
                turpis sed ultricies scelerisque, enim enim tristique
              </div>
            </div>
          </div>

          <div className="chat-message-row outgoing">
            <div className="chat-bubble chat-bubble-purple">
              <div className="chat-text">
                Mauris quam augue, aliquam eget quam convallis, finibus rutrum diam.
              </div>
            </div>
          </div>

          <div className="chat-message-row incoming second-row">
            <div className="chat-avatar chat-avatar-2">J</div>
            <div className="chat-bubble chat-bubble-light">
              <div className="chat-sender">John (Aug 10, 2025)</div>
              <div className="chat-text">
                Suspendisse maximus gravida mauris tristique ornare. Donec nulla urna, pharetra sit amet magna in, efficitur
                venenatis nibh.
              </div>
            </div>
          </div>

          <div className="chat-message-row outgoing last-row">
            <div className="chat-bubble chat-bubble-purple fill-message">
              <div className="chat-text">Vestibulum nisi risus, euismod quis turpis</div>
            </div>
          </div>
        </div>

        <div className="chat-composer">
          <span>  <FontAwesomeIcon className="attachment-icon" icon={faPaperclip} /></span>
          <Form.Group className="chat-form-group">
            <Form.Control
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              aria-label="Type your message"
            />
          </Form.Group>
          <div className="d-flex align-items-center gap-1 chat-main-btn-x">
            <Button type="button" className="chat-send-btn ">
              <FontAwesomeIcon icon={faPaperPlane} />
            </Button>

          </div>
        </div>
      </Container>
    </div>
  );
}
