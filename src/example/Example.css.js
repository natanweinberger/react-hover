export default `
.react-hover-example {
  background: #1182dd;
  height: 550px;
  position: relative;
}
.title {
    color: #fff;
    padding-top: 50px;
    margin-top: 0px;
    font-size: 45px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 700;
  }
.demonstration {
  width: 600px;
  height: 150px;
  margin: 10px auto;
  background: rgba(0,0,0,0.1);
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  $wd: 60px;
  a{
    display: block;
    width: $wd;
    height: $wd;
    line-height: $wd;
    border-radius: $wd;
    text-align: center;
    color: #222;
    background: rgba(255,255,255,1);
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: - $wd / 2;
    margin-top: - $wd / 2 - 15;
    cursor: pointer;
    box-shadow: 3px 4px 3px rgba(0,0,0,0.5);
    border: 1px solid #333;
    &:after {
      content: "hover on me";
      text-align: center;
      color: rgba(0,0,0,0.25);
      position: absolute;
      width: 100px;
      top: 45px;
      left: -18px;
    }
  }
}
.control-panel {
  background: rgba(255,255,255,0.4);
  border-top: 1px solid rgba(0,0,0,0.2);
  position: absolute;
  bottom:0px;
  left:0px;
  right:0px;
  width: 100%;
  height: 230px;
  overflow: auto;
  &:after {
    content: '';
    height:0px;
    display:block;
    clear:both;
  }
  .button-group {
    box-sizing: border-box;
    width: 55%;
    float: left;
    padding-left: 10px;
    .item {
      padding:3px 2px;
      clear:both;
      p{
        margin: 10px 0px 2px;
        font-size: 18px;
        color: #777;
      }
      a{
        border-radius: 3px;
        text-align: center;
        cursor: pointer;
        transition: background 0.25s ease-out;
        background: #e8e8e8;
        float:left;
        margin-right: 8px;
        padding: 7px 10px;
        font-size: 14px;
        .mark{
          color: #888;
          font-size: 13px;
          display: inline-block;
          padding-left: 3px;
        }
        &.active, &:hover {
          color: #fff;
          background: #1182DD;
          .mark {
            color: rgba(255,255,255,0.6);
          }
        }
      }
    }
  }
  pre {
    box-sizing: border-box;
    width: 45%;
    float: left;
    div {
      background: rgba(255,255,255,0.8);
      margin:0px 20px;
      padding: 8px 12px;
    }
    .label {
      margin: 10px 0px 2px;
      font-size: 18px;
      color: #777;
    }
  }
}

.advance {
  .title {
    color: #222;
    padding-top: 100px;
    margin-top: 0px;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 700;
  }
  .sub-title {
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    color: #666;
    font-size: 20px;
    padding-bottom: 5px;
  }
  .section {
    width: 800px;
    margin: 20px auto;
  }
}

.example-jsx {
  padding: 10px 0px;
  height: 50px;
  &:after {
    content: '';
    clear: both;
    height: 0;
    visibility: hidden;
  }
  .side {
    width: 50%;
    float: left;
    box-sizing: border-box;
  }
  a {
    text-align: center;
    $width: 55px;
    width: $width;
    height: $width;
    line-height: $width;
    border-radius: $width;
    display: block;
    margin: auto;
    cursor: pointer;
    color: #999;
    border: 1px solid #999;
    font-size: 13px;
    &:hover {
      color: #222;
      border: 1px solid #222;
    }
  }
  p {
    margin-bottom: 2px;
    padding: 0px;
  }
  ul {
    padding: 0px;
    list-style: none;
    li {
      padding-left: 10px;
      margin: 0px;
      text-align: left;
    }
  }
}

.example-pre {
  border-radius: 2px;
  border: 1px solid rgba(0,0,0,0.2);
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 60px;
  font-size: 14px;
  p {
    line-height: 30px;
  }
}

// Extra class for demonstration
.extraClass {
  font-size: 20px !important;
  pointer-events: auto !important;
  &:hover {
    visibility: visible !important;
    opacity: 1 !important;
 }
}

.customeTheme {
  color: #ff6e00 !important;
  background-color: orange !important;
  &.place-top {
    &:after {
      border-top-color: orange !important;
      border-top-style: solid !important;
      border-top-width: 6px !important;
    }
  }
}
`;