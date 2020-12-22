import React from "react";
import styled from "styled-components/macro";
import "../progressStyle.css";

const Wrapper = styled.div`
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
`;

const Meter = styled.div`
  width: 30%;
  height: 25px;
  position: relative;
  background: rgba(17, 17, 17, 0.3);
  margin: 20px auto;
  border: 1px whitesmoke solid;
`;

const Span = styled.span``;

export default function ProgressBar() {
  return (
    <Wrapper>
      <Meter>
        <Span className="span">
          <span className="skillName">JavaScript </span>
          <span className="Percent">70%</span>
        </Span>
      </Meter>
    </Wrapper>
  );
}
