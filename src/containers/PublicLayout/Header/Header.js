import { MenuOutlined } from "@ant-design/icons";
import { Col, Menu, Popover, Row } from "antd";
import { LOGO_SGUET } from "constants/common";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {
  const { isMobile } = props;
  const [menuMode, setMenuMode] = useState("horizontal");
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    !isMobile ? setMenuMode("horizontal") : setMenuMode("inline");
  }, [isMobile]);

  const menu = (
    <Menu mode={menuMode} id="nav" key="nav">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="blog">
        <Link to="/blog">Blog</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
      <Menu.Item key="faq">
        <Link to="/faq">FAQ</Link>
      </Menu.Item>
    </Menu>
  );

  const handleShowMenu = () => {
    const visible = menuVisible;
    setMenuVisible(!visible);
  };

  return (
    <>
      <div className="header">
        {menuMode === "inline" ? (
          <Popover
            className="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            onVisibleChange={handleShowMenu}
          >
            <MenuOutlined onClick={handleShowMenu} />
          </Popover>
        ) : null}
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
            <Link to="/">
              <div className="header-logo" to="/">
                <img src={LOGO_SGUET} alt="logo" style={{ width: "32px" }} />
                <>
                  <b>SUPPORT GROUP UET</b>
                </>
              </div>
            </Link>
          </Col>
          <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
            <div className="header-meta">
              {menuMode === "horizontal" ? (
                <div className="menu">{menu}</div>
              ) : null}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Header;
