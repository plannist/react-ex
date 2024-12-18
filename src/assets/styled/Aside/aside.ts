import styled from 'styled-components';

const Aside = styled.div`
  width: auto;
  position: relative;
  height: calc(100vh);
  transition: all ease 0.3s;

  @include scroll();

  /* &::-webkit-scrollbar {
		width: 6px;
	}

	&::-webkit-scrollbar-thumb {
		height: 17%;
		background-color: rgba(86, 82, 229, 1);
		border-radius: 10px;
	}

	&::-webkit-scrollbar-track {
		background-color: rgba(86, 82, 229, 0.33);
	} */

  .menu-side {
    position: absolute;
    top: 0%;
    bottom: 0;
    width: 63px;
    /* justify-content: start; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* flex: 1 0 50px; */
    border-right: 1px solid var(--layout-line-color);
    > ul {
      width: 100%;
    }

    &-bottom {
      margin-top: auto;
      margin-bottom: 10px;
    }

    &-item {
      width: 62px;
      height: 60px;
      color: #666;
      box-sizing: border-box;
      &.login-info {
        width: 100%;
      }

      button {
        display: block;
        height: 100%;
        padding: 0;
        background-color: transparent;
        line-height: 1;
        color: #666;
        font-size: 12px;
        > span {
          display: block;
          margin-top: 4px;
        }
        svg {
          width: 24px;
          height: 24px;
        }
      }

      &:hover {
        .btn-icon:not(:disabled):not(.ant-btn-disabled):hover {
          background-color: transparent;
          color: var(--base-color);
        }

        path,
        circle {
          stroke: var(--base-color);
        }
      }

      &.on {
        color: #fff;

        .btn-icon.ant-btn-link:not(:disabled):not(.ant-btn-disabled):hover {
          background-color: var(--point-color);
          color: #fff;
        }

        button {
          width: 63px;
          padding-right: 1px;
          background-color: var(--point-color);
          color: #fff;
        }
        path {
          stroke: #fff;
        }
      }
    }
  }

  &.on {
    menu {
      width: 257px;
    }
  }

  &.off {
    overflow-x: hidden;
    menu {
      width: 0px;
      padding: 0;
    }

    dl {
      dd {
        width: 44px;
        overflow: hidden;
        svg {
          &:nth-child(2) {
            display: none;
          }
        }
      }
    }
  }

  .btn-icon {
    width: 100%;
    .badge {
      position: absolute;
      top: 6px;
      right: 17px;
      width: 14px;
      height: 14px;
      padding: 0;
      background-color: var(--point-color);
      border-radius: 100%;
      line-height: 14px;
      color: #fff;
      font-size: 9px;
      text-align: center;
    }
  }

  .logo {
    position: sticky;
    top: 0;
    height: 50px;
    margin: 0;
    background-color: var(--bg-color);
    z-index: 1;
  }

  .logo-icon {
    display: block;
    height: 100%;
    margin: 0 -8px;
    text-align: center;
    cursor: pointer;
    g {
      &:first-child {
        opacity: 0;
      }
    }
  }

  .menu-top {
    position: sticky;
    top: 50px;
    padding-top: 12px;
    background-color: var(--bg-color);
    z-index: 1;
  }

  .search-area {
    position: relative;
    padding: 0 8px;

    .ant-form-item-control {
      height: 30px;
    }

    .search-wrap {
      height: 32px;
      .ant-form-item-control {
        height: 32px;
      }
    }

    .ant-input-outlined,
    .ant-input-search-button {
      height: 32px;
    }
  }

  .search-box {
    position: absolute;
    top: 100%;
    left: 8px;
    right: 8px;
    padding: 8px 0;
    background-color: var(--popup-bg-color);
    border: 1px solid var(--popup-border-color);
    border-radius: 8px;
    box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
      0px 12px 16px -4px rgba(16, 24, 40, 0.08);
    z-index: 10;

    .title-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 26px;
      padding: 0 12px;
      .title {
        font-size: 12px;
      }

      .btn-text {
        padding: 0;
        color: #8f8f8f;
        font-size: 11px;
      }
    }

    ul {
      overflow-y: auto;
      max-height: 280px;
      list-style: none;
      /* padding-right: 12px;
			margin-right: -12px; */
    }

    li:not(.empty) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 28px;
      padding: 0 12px;

      &:hover {
        background-color: var(--btn-hover-bg);
      }

      button {
        height: 28px;
        padding: 0;
        background-color: #fff;
        border: 0;
        font-size: 12px;
        &:hover {
          background-color: transparent;
        }
      }

      .sch-item {
        width: calc(100% - 20px);
        padding-left: 22px;
        background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='8' fill='%23F1F1F5'/%3E%3Cpath d='M11.2008 11.1979L9.65411 9.65118M10.4897 7.6423C10.4897 9.21324 9.21617 10.4867 7.64523 10.4867C6.07428 10.4867 4.80078 9.21324 4.80078 7.6423C4.80078 6.07135 6.07428 4.79785 7.64523 4.79785C9.21617 4.79785 10.4897 6.07135 10.4897 7.6423Z' stroke='%23111111' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
          no-repeat left center !important;
        text-align: left;
        color: var(--base-color);

        span {
          display: block;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .btn-del {
        width: 12px;
        height: 12px;
        background: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 1L1 7M1 1L7 7' stroke='%23C4C4C4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
          no-repeat center !important;
        text-indent: -9999em;
      }

      .btn-fav {
        width: 12px;
        margin-right: 6px;
        text-indent: -9999em;
        background: var(--aside-search-box-btn-fav) no-repeat center;

        &.on {
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='13' viewBox='0 0 12 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.09478 0.928375C5.45471 0.16162 6.54529 0.16162 6.90522 0.928376L7.93651 3.12529C8.07808 3.42687 8.36053 3.63814 8.68982 3.68875L11.0777 4.05576C11.882 4.17937 12.2098 5.16056 11.6413 5.74276L9.85273 7.57459C9.63091 7.80178 9.53017 8.1208 9.58128 8.43418L9.99443 10.9672C10.1288 11.7911 9.25411 12.4073 8.52355 12.0033L6.48392 10.8754C6.1828 10.7089 5.8172 10.7089 5.51608 10.8754L3.47645 12.0033C2.74589 12.4073 1.87118 11.7911 2.00557 10.9672L2.41872 8.43418C2.46983 8.1208 2.36909 7.80178 2.14727 7.57459L0.358694 5.74276C-0.209758 5.16056 0.118038 4.17937 0.922286 4.05576L3.31018 3.68875C3.63947 3.63814 3.92192 3.42687 4.06349 3.12529L5.09478 0.928375Z' fill='%233579D4'/%3E%3C/svg%3E%0A");
        }
      }

      .menu-item {
        display: block;
        width: calc(100% - 20px);
        padding-right: 22px;
        background: var(--aside-search-box-menu-item) no-repeat right center !important;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        > span {
          display: inline;
        }

        strong {
          color: var(--point-color);
          font-weight: normal;
        }
      }
    }

    .empty {
      height: 280px;
    }

    /* .empty {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 280px;
			text-align: center;

			dl {
				padding-top: 56px;
				background: url("data:image/svg+xml,%3Csvg width='41' height='40' viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.5 20C3.5 29.3888 11.1112 37 20.5 37C29.8888 37 37.5 29.3888 37.5 20C37.5 10.6112 29.8888 3 20.5 3C11.1112 3 3.5 10.6112 3.5 20Z' fill='%23E5E5E6'/%3E%3Cpath d='M20.5 18.1111V27.5556M20.5 37C11.1112 37 3.5 29.3888 3.5 20C3.5 10.6112 11.1112 3 20.5 3C29.8888 3 37.5 10.6112 37.5 20C37.5 29.3888 29.8888 37 20.5 37ZM20.5941 12.4444V12.6333L20.4059 12.6337V12.4444H20.5941Z' stroke='%23E5E5E6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M20.5941 18.111V27.5554M20.6882 12.4443V12.6332L20.5 12.6336V12.4443H20.6882Z' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
					no-repeat top center;
			}
			dt {
				margin-bottom: 6px;
				font-weight: 600;
				color: var(--base-color);
			}
			dd {
				font-size: 12px;
				color: #767676;
			}
		} */
  }

  .fav-top {
    position: sticky;
    top: 50px;
    //margin-bottom: 20px;
    background-color: var(--bg-color);
    z-index: 1;
  }

  .fav-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 8px;

    .title {
      margin: 0;
      font-size: 18px;
      color: var(--base-color);
    }

    .btn-setting {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      padding: 0;
      background-color: transparent !important;
      border: 0 none;
      /* &:hover {
				background-color: transparent !important;
			} */
    }
  }

  .btn-wrap {
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    margin-top: 4px;
    line-height: 16px;

    .ant-btn {
      height: 28px;
      padding: 0;
      background-color: transparent;
      border: 0;
      color: var(--btn02-color);
      font-size: 12px;
      font-weight: var(--font-medium);

      &:hover {
        background-color: transparent !important;
        color: var(--btn02-color);
      }

      svg {
        margin-right: 4px;
      }
    }

    .btn-menu-close {
      &.expand {
        svg {
          transform: rotate(90deg);
        }
      }
    }

    .btn-menu-save {
      line-height: 1.2;
      &:hover,
      &:active {
        border-color: none;
        color: var(--base-color);
        span {
          text-decoration: underline;
        }
      }
    }
  }

  //메뉴리스트 뎁스
  menu {
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    padding: 0 8px;
    margin-left: 64px;
    border-right: 1px solid var(--layout-line-color);
    color: var(--aside-menu-color);
    font-size: 14px;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 0;
    }

    .cnt {
      color: var(--point-color);
      font-weight: var(--font-bold);
      font-size: 12px;
    }

    .aside__1depth,
    .aside__2depth {
      li {
        .icon-arrow {
          position: relative;

          &:hover {
            border-radius: 6px;
            background-color: var(--aside-menu-hover);
          }

          svg {
            position: absolute;
            right: 8px;
            top: 50%;
            margin-top: -12px;
            transform: rotate(180deg);
            /* transition: all ease 0.3s; */
          }

          path {
            stroke: var(--base-color);
          }
        }

        .icon-arrow-bokmk-menu {
          position: relative;

          &:hover {
            border-radius: 6px;
            background-color: var(--aside-menu-hover);
          }

          svg {
            position: absolute;
            right: 8px;
            top: 50%;
            margin-top: -12px;
            transform: rotate(180deg);
            /* transition: all ease 0.3s; */
          }

          path {
            stroke: var(--base-color);
          }
        }

        dl,
        .aside__2depth {
          transform: scaleY(1);
          transform-origin: top;
          /* transition: transform 0.3s ease; */
        }

        dd {
          visibility: visible;
          /* transition: all 0.3s ease; */
        }

        &.open {
          height: auto;

          & > .icon-arrow {
            font-weight: bold;
            color: var(--base-color);

            path {
              /* stroke: var(--base-color); */
              stroke-opacity: 1;
            }
          }
          & > .icon-arrow-bokmk-menu {
            color: var(--base-color);

            path {
              /* stroke: var(--base-color); */
              stroke-opacity: 1;
            }
          }
        }

        &.close {
          .icon-arrow svg {
            transform: rotate(360deg);
          }

          dl,
          .aside__2depth {
            transform: scaleY(0);
            transform-origin: top;
            /* transition: all ease 0.1s; */
          }

          dd {
            visibility: hidden;
            opacity: 0;
            height: 0;
            /* transition: all ease 0.1s; */
          }
        }
      }
    }

    .aside__1depth {
      font-weight: 600;
      li {
        position: relative;
        height: 42px;
        line-height: 42px;
        letter-spacing: -0.2px;
        font-weight: normal;
        cursor: pointer;

        .icon-arrow {
          padding: 0 8px;
        }

        svg {
          display: inline-flex;
          align-items: center;
        }
      }
    }

    .aside__2depth {
      li {
        .icon-arrow {
          height: 36px;
          padding-left: 16px;
          line-height: 36px;
        }

        & > .icon-arrow-bokmk-menu {
          height: 36px;
          padding-left: 16px;
          line-height: 36px;
        }
      }
    }

    .aside__3depth {
      margin: 0;
      li {
        .icon-arrow {
          height: 36px;
          padding-left: 36px;
          line-height: 36px;
        }
      }

      &-item {
        position: relative;
        display: block;
        align-items: center;
        width: 100%;
        height: 36px;
        line-height: 36px;
        padding-left: 36px;
        font-size: 14px;
        letter-spacing: -0.2px;
        color: var(--aside-menu-color);
        cursor: pointer;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        &::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 4px;
          margin-right: 4px;
          background-color: #666;
          border-radius: 100%;
          vertical-align: 3px;
        }

        &.selected {
          background-color: #f8f8f8;
          color: var(--point-color);
          font-weight: bold;
          &::before {
            background-color: var(--point-color);
          }
        }

        &:hover {
          border-radius: 6px;
          background-color: var(--aside-menu-hover);
          color: var(--point-color);
          font-weight: bold;
          &::before {
            background-color: var(--point-color);
          }
        }
      }
    }

    .empty {
      height: 280px;
    }
  }
`;

export default Aside;
