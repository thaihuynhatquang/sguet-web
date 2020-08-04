import { Col, Row } from "antd";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="bottom-bar">
        <Col>
          <span
            style={{
              lineHeight: "16px",
              paddingRight: 12,
              marginRight: 11,
            }}
          >
            <a
              href="https://www.facebook.com/SupportGroupUET/"
              rel="noopener noreferrer"
              target="_blank"
            >
              SGUET - Câu lạc bộ Hỗ trợ sinh viên trường Đại học Công nghệ
            </a>
          </span>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
