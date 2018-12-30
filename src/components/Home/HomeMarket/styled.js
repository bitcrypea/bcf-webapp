import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 40px 0;
  background-color: #f8f8fb;
`

export const MaxWidth = styled.div`
  width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
`

export const TabContainer = styled.div`
  box-shadow: inset 0 -1px 0 0 #e6eaf0;
  color: #666;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`

export const BoxTabsContent = styled.div`
  display: block;
`

export const Tab = styled.span`
  padding: 8px 8px 6px;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 20px;
  list-style-type: none;

  &:hover {
    color: #659aea;
  }
`

export const TableHeaderInput = styled.div`
  color: #666;
  list-style-type: none;
`

export const NewInput = styled.div`
  width: 200px;
  font-size: 14px;
`

export const BoxInputBox = styled.div`
  position: relative;
`

export const BoxInputPrefix = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`

export const IconMySearch = styled.div`
  color: #a5adb8;
  line-height: 1em;
  &::before {
    content: "\e60c";
    font-family: iconfont;
    font-style: normal;
    font-weight: 400;
    speak: none;
    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    text-align: center;
    font-variant: normal;
    text-transform: none;
    line-height: 1em;
    -webkit-font-smoothing: antialiased;
  }
`

export const InputSearch = styled.input`
  padding: 0 8px 0 22px;
  height: 28px;
  outline: none;
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  background: transparent;
  color: #333;
  overflow: visible;
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin-bottom: 8px;
`

export const Table = styled.table`
  table-layout: fixed;
  text-align: right;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  -webkit-border-horizontal-spacing: 0px;
  -webkit-border-vertical-spacing: 0px;
  display: table;
  border-collapse: separate;
  border-color: grey;
`

export const Colgroup = styled.colgroup`
  display: table-column-group;
  text-align: right;
`

export const THead = styled.thead`
  font-size: 12px;
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
  text-align: right;
  border-collapse: separate;
  border-spacing: 2px;
`

export const HomeTH = styled.tr`
  font-weight: 400;
  padding: 16px 0 8px;
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  font-size: 12px;
`

export const Column1 = styled.th`
  padding: inherit;
  color: #9aa9ba;
  font-weight: 400;
  text-align: left;
`

export const Column2 = styled.th`
  padding: inherit;
  color: #9aa9ba;
  font-weight: 400;
  text-align: left;
  cursor: pointer;
`

export const Column3 = styled.th`
  padding: inherit;
  color: #9aa9ba;
  font-weight: 400;
  cursor: pointer;
`

export const Column4 = styled.th`
  padding: inherit;
  color: #9aa9ba;
  font-weight: 400;
`

export const JSTableBox = styled.div``

export const TBody = styled.tbody`
  font-size: 14px;
  text-align: right;
`

export const TableRow = styled.tr`
  padding: 8px 0;
  border-radius: 2px;
  cursor: pointer;
  color: #333;

  &:nth-child(2n-1) {
    background-color: #fff;
  }
`

export const TD1 = styled.td`
  cursor: pointer;
  color: #a2adb8;
  padding: inherit;
  font-size: 18px;
  text-align: center;
`

export const TD2 = styled.td`
  padding: inherit;
  text-align: left;
  cursor: pointer;
  font-size: 14px;
`

export const TD3 = styled.td`
   padding: inherit;
   color: #f0523a;
   cursor: pointer;
`

export const TD4 = styled.td`
  padding: inherit;
  color: #333;
  text-align: right;
`
