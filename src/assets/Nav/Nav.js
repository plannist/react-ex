import styled from 'styled-components';

const Nav = styled('nav')`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 2%;
  width: 100%;
  height: 65px;
  padding: 21px 22px 20px 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  > .ant-btn {
    width: 40px;
    height: 40px;
    padding: 0;
    svg {
      margin: 0;
    }
  }
  svg {
    margin-right: 10px;
    fill: #1a1a1a;
  }
  div {
    position: relative;
    /* margin: 0 0 0 50px; */
    ul {
      width: 240px;
      padding: 20px 0;
      border-radius: 4px;
      box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.15);
      background-color: #fff;
      position: absolute;
      z-index: -1;
      top: 40px;
      opacity: 0;
      visibility: hidden;
      overflow: visible;
      transition: all 0.1s ease;
      li {
        width: 100%;
        height: 46px;
        line-height: 46px;
        padding: 0 20px;
        position: relative;
        cursor: pointer;
        a {
          font-size: 14px;
          display: flex;
          align-items: center;
          svg {
            opacity: 0.4;
          }
        }
        &:hover {
          background-color: #f5f5f5;
          > a {
            color: #6965ff;
            font-weight: bold;
            svg {
              opacity: 1;
              fill: #6965ff;
            }
          }
        }
        &.sub {
          &:hover {
            > a {
              &::after {
                background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath stroke='%236965FF' stroke-linecap='round' stroke-linejoin='round' d='m6 3 4.993 5.003L6 13'/%3E%3Cpath d='M6.354 2.647a.5.5 0 0 0-.766.637l.058.07 4.641 4.648-4.64 4.645a.5.5 0 0 0-.058.637l.058.07a.5.5 0 0 0 .637.057l.07-.058 4.993-4.997a.5.5 0 0 0 .058-.637l-.058-.07-4.993-5.002z' fill='%236965FF' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E%0A");
              }
            }
          }
          > a {
            &::after {
              content: '';
              position: absolute;
              right: 15px;
              top: 15px;
              width: 16px;
              height: 16px;
              background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m6 3 4.993 5.003L6 13'/%3E%3Cpath d='M6.354 2.647a.5.5 0 0 0-.766.637l.058.07 4.641 4.648-4.64 4.645a.5.5 0 0 0-.058.637l.058.07a.5.5 0 0 0 .637.057l.07-.058 4.993-4.997a.5.5 0 0 0 .058-.637l-.058-.07-4.993-5.002z' fill='%231A1A1A' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E%0A");
            }
          }
          & {
            ul {
              position: absolute;
              left: 240px;
              top: 6px;
              li {
                background-color: #fff;
                height: 46px;
                line-height: 46px;
                &:hover {
                  background-color: #f9fafb;
                  a {
                    font-weight: bold;
                  }
                }
                a {
                  font-size: 13px;
                  font-weight: normal;
                }
              }
            }
            &.on {
              ul {
                z-index: 9999;
                visibility: visible;
                transition: all 0.5s ease-in-out;
                opacity: 1;
                overflow: visible;
              }
            }
          }
        }
      }
    }
    a {
      text-decoration: none;
      font-family: 'Pretendard';
      font-size: 16px;
      font-weight: bold;
      letter-spacing: -0.2px;
      color: #1a1a1a;
      &.on {
        & + ul {
          z-index: 9999;
          visibility: visible;
          transition: all 0.5s ease-in-out;
          opacity: 1;
          overflow: visible;
        }
      }
    }
    &:last-child {
      margin-left: auto;
      display: flex;
      align-items: center;
      column-gap: 10px;
      span {
        color: #1a1a1a;
        font-weight: bold;
        cursor: pointer;
        padding-top: 2px;
      }
      button {
        display: flex;
        align-items: center;
        svg {
          display: inline-flex;
        }
      }
    }
  }
`;

export default Nav;
