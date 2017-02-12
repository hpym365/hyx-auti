---
category: Components
type: Navigation
title: Pagination
subtitle: 分页
cols: 1
---


## 何时使用


## API


### Panation

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
pageSize | 页码大小 | Number | 10
total | 数据总条数 | Number | |
currPage | 当前页 | Number | 1
showJumper | 是否可跳转自定义页 | Boolean | false
showSizeChanger | 是否可改变页码大小 | Boolean | false
pageSizeOptions | 指定每页可以显示多少条 | Array | [10, 20, 30, 40]
simple | 简单版 | Boolean | false
mini | 迷你版 | Boolean | false
@change | 当前页吗发生变化时触发 | Function(currPage) |  | 
@size-change | pageSize变化时触发 | Function(pageSize) |  |

