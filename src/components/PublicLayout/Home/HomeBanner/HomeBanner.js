import React from "react";
import "./HomeBanner.scss";
import { Row, Button } from "antd";

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="home-banner-image">
        <div className="banner-body">
          <Row justify="center">
            <span className="banner-title">
              CLB HỖ TRỢ SINH VIÊN TRƯỜNG ĐẠI HỌC CÔNG NGHỆ
            </span>
          </Row>
          <Row justify="center">
            <span className="banner-subtitle">
              Với sứ mệnh Hỗ trợ và giúp đỡ sinh viên UET hiểu biết về trường và
              các hoạt động học tập, phong trào đoàn thể của nhà trường ...
            </span>
          </Row>
          <Row justify="center">
            <Button size="large" type="primary" className="banner-button">
              Tìm hiểu thêm
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
