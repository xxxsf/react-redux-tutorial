/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Layout } from "antd";
import { Props, State } from "./type";
import styles from "./index.style";

import { fetchList, createTestAction } from "../../redux/modules/testRedux"

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        msg: "This is a Ts demoooo!",
        num: 1,
        // a: 11 // it will be wrong if it not be defined in typs.ts
    };
  }

  componentDidMount(){
    // const { fetchList, createTestAction } = this.props;
    this.props.createTestAction();
    this.props.fetchList()
  }

  render() {
    const { homeData={} } = this.props;
    if (!homeData.result) {
      return null;
    }

    return (
      <Layout>
        <div className={styles.homePage}>
          <a
            href="https://github.com/allan2coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://gw.alicdn.com/tfs/TB1B3OWiBTH8KJjy0FiXXcRsXXa-140-141.png"
              alt="logo"
            />
          </a>
          <h1>{this.state.msg}</h1>
          <p className={styles.mp3Name}>{homeData.result.name} is from Redux's store!</p>
          <audio controls="controls" src={homeData.result.url}></audio>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state:any) => {
  return ({
    homeData: state.test.homeData
  })
};

const mapDispatchToProps = (dispatch:any) => bindActionCreators({
  fetchList, createTestAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);