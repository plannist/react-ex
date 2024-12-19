import styled from 'styled-components';

const Title = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 11px 32px;
  margin: 0 -32px;
  background-color: var(--bg-color);
  z-index: 10;

  .title-text {
    display: flex;
    align-items: center;
    .btnGroup {
      margin-left: auto;
    }
  }

  .title {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 4px;
    .btn-text {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      padding: 0;
    }
  }

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: var(--font-bold);
    letter-spacing: -0.5;
    color: var(--base-color);
  }

  .btn-help,
  .btn-more {
    padding: 0;
  }

  .btn-help {
    margin-left: 4px;
    &:hover {
      background-color: transparent !important;
    }
    path {
      stroke: var(--base-color);
    }
  }

  .btn-icon-favorite {
    width: 26px;
    height: 26px;
    padding: 0;
    background-color: transparent !important;
    margin-right: 4px;
    svg {
      width: 26px;
      height: 26px;
      path {
        stroke: var(--base-color);
      }
    }

    &:hover {
      svg {
        path {
          stroke: var(--point-color);
          stroke-opacity: 1;
        }
      }
    }

    &.on {
      svg {
        fill: var(--point-color);
        path {
          stroke: var(--point-color);
          stroke-opacity: 1;
        }
      }
    }
  }

  .btnGroup {
    margin-left: auto;
  }

  h3 {
    font-size: 14px;
    height: 28px;
    line-height: 38px;
    font-weight: bold;
    margin: 0;
    + div {
      .ant-btn {
        font-size: 12px;
        height: 28px;
        padding: 4px 10px;
      }
    }
  }
`;

export default Title;
