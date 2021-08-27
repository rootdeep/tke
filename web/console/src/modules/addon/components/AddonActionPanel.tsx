/*
 * Tencent is pleased to support the open source community by making TKEStack
 * available.
 *
 * Copyright (C) 2012-2021 Tencent. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 * this file except in compliance with the License. You may obtain a copy of the
 * License at
 *
 * https://opensource.org/licenses/Apache-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OF ANY KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations under the License.
 */
import * as React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators, FetchState } from '@tencent/ff-redux';
import { t } from '@tencent/tea-app/lib/i18n';
import { Bubble, Button, Justify, Table, Text } from '@tencent/tea-component';

import { allActions } from '../actions';
import { router } from '../router';
import { RootProps } from './AddonApp';

const mapDispatchToProps = dispatch =>
  Object.assign({}, bindActionCreators({ actions: allActions }, dispatch), {
    dispatch
  });

@connect(state => state, mapDispatchToProps)
export class AddonActionPanel extends React.Component<RootProps, any> {
  render() {
    let { actions, cluster, route, openAddon } = this.props,
      urlParams = router.resolve(route);

    let isCanNotAdd =
      openAddon.list.data.recordCount === 0 &&
      (openAddon.list.fetched !== true || openAddon.list.fetchState === FetchState.Fetching);

    let errorTips = '';

    if (cluster.selection && cluster.selection.status.phase !== 'Running') {
      isCanNotAdd = true;
      errorTips = '当前集群状态不正常';
    } else {
      errorTips = '暂未选择集群';
    }

    return (
      <Table.ActionPanel>
        <Justify
          left={
            <Bubble placement="right" content={isCanNotAdd ? <Text>{errorTips}</Text> : null}>
              <Button
                type="primary"
                disabled={isCanNotAdd}
                onClick={() => {
                  // 跳转到新建界面
                  router.navigate(Object.assign({}, urlParams, { mode: 'create' }), route.queries);
                }}
              >
                {t('新建')}
              </Button>
            </Bubble>
          }
        />
      </Table.ActionPanel>
    );
  }
}
