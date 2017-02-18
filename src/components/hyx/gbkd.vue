<template>
  <div>
    <p>{{tableWidth}}</p>
    <table style="width: 500px;border: 2px solid #002a80;">
      <tr style="border: 2px solid #002a80;">
        <td style="border: 2px solid #002a80;">123</td>
        <td id="gblk" :style="{width: column.width+'px', border:'2px solid #002a80'}" @mousemove="mousemove"
            @mouseout="mouseout" @mousedown="mousedown($event,column)">123
        </td>
        <td>123</td>
      </tr>
    </table>
    <div class="el-table__column-resize-proxy" ref="resizeProxy" v-show="resizeProxyVisible"></div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        column: {
          width: 30
        }
      }
    },
    methods: {
      mousemove () {
        console.log('123')
        console.log('mousemove')
        let target = event.target
        let rect = target.getBoundingClientRect()
        const bodyStyle = document.body.style
        if (rect.width > 12 && rect.right - event.pageX < 8) {
          console.log('mousemove3')
          bodyStyle.cursor = 'col-resize'
        }
      },
      mouseout () {
        document.body.style.cursor = ''
      },
      mousedown (event, column) {
        this.dragging = true

        this.$parent.resizeProxyVisible = true
        console.log(this)
        debugger
        const tableEl = this.$parent.$el
        const tableLeft = tableEl.getBoundingClientRect().left
        const columnEl = this.$el.querySelector('#gblk')
        const columnRect = columnEl.getBoundingClientRect()
        const minLeft = columnRect.left - tableLeft + 30

        columnEl.classList.add('noclick')

        this.dragState = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - tableLeft,
          startColumnLeft: columnRect.left - tableLeft,
          tableLeft
        }

        const resizeProxy = this.$refs.resizeProxy
        resizeProxy.style.left = this.dragState.startLeft + 'px'

        document.onselectstart = function () {
          return false
        }
        document.ondragstart = function () {
          return false
        }

        const handleMouseMove = (event) => {
          const deltaLeft = event.clientX - this.dragState.startMouseLeft
          const proxyLeft = this.dragState.startLeft + deltaLeft

          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px'
        }

        const handleMouseUp = () => {
          if (this.dragging) {
            const finalLeft = parseInt(resizeProxy.style.left, 10)
            const columnWidth = finalLeft - this.dragState.startColumnLeft
            column.width = column.realWidth = columnWidth

            this.store.scheduleLayout()

            document.body.style.cursor = ''
            this.dragging = false
            this.draggingColumn = null
            this.dragState = {}

            this.$parent.resizeProxyVisible = false
          }

          document.removeEventListener('mousemove', handleMouseMove)
          document.removeEventListener('mouseup', handleMouseUp)
          document.onselectstart = null
          document.ondragstart = null

          setTimeout(function () {
            columnEl.classList.remove('noclick')
          }, 0)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
      }
    }
  }
</script>
