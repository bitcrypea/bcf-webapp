import styled from 'styled-components';

export const TableContainer = styled.div`
  font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue',
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  clear: both;
`;

export const TableContent = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border-radius: 4px 4px 0 0;
`;

export const TH = styled.th`
  padding: 16px 16px;
  word-break: break-word;
  -ms-word-break: break-all;
  background: #fafafa;
  -webkit-transition: background 0.3s ease;
  -o-transition: background 0.3s ease;
  transition: background 0.3s ease;
  text-align: left;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  border-bottom: 1px solid #e8e8e8;
`;

export const TD = styled.td`
  padding: 16px 16px;
  word-break: break-word;
  -ms-word-break: break-all;
  border-bottom: 1px solid #e8e8e8;
  -webkit-transition: all 0.3s, border 0s;
  -o-transition: all 0.3s, border 0s;
  transition: all 0.3s, border 0s;
`;

export const Divider = styled.div`
  margin: 0 8px;
  display: inline-block;
  height: 0.9em;
  width: 1px;
  vertical-align: middle;
  position: relative;
  top: -0.06em;
  font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue',
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  list-style: none;
  background: #e8e8e8;
`;
