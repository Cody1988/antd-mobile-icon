import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd-mobile';
import styles from './IndexPage.css';

const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => {
  console.log(type);
  return (
    <svg
      className={`am-icon am-icon-${type.default.id} am-icon-${size} ${className}`}
      {...restProps}
    >
      <use xlinkHref={`#${type.default.id}`} />
    </svg>
  );
};


function IndexPage() {
  return (
    <div className={styles.normal}>
      <Button>Hello</Button>
      <CustomIcon type={require('../assets/activity.svg')} />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
