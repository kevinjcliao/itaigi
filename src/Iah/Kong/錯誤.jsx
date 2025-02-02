import React from 'react';
import Debug from 'debug';
import ABo from '../../GuanKiann/ABo/ABo';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵';

const debug = Debug('itaigi:Kong錯誤');

export default function 錯誤() {
  return (
    <div className="kong content">
      <div className="ui segment">
        <h3>
          找「
          {this.props.華語關鍵字}
          」錯了嗎？
        </h3>
        {this.props.內容}
        <button className="ui button large olive">
          <i className="student icon" />
          求講法
        </button>
      </div>
      <h3>我會曉，會使按呢講</h3>
      <ABo
        華語關鍵字={this.props.華語關鍵字}
        csrftoken={this.props.csrftoken}
        編號={this.props.編號}
        漢字={this.props.漢字}
        音標={this.props.音標}
      />
    </div>
  );
}
