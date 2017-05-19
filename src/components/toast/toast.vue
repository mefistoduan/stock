<template>
  <div v-show="show" :transition="transition" >
    <div class="modal">
      <div class="toast-dialog" >
        <div class="toast-content">
          <div class="modal-body">
            {{toasttext}}
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /**
   * Bootstrap Style Modal Component for Vue
   * Depend on Bootstrap.css
   */
  export default {
    props: {
      show: {
        type: Boolean,
        twoWay: true,
        default: false
      },
      full: {
        type: Boolean,
        default: false
      },
      // 为true时无法通过点击遮罩层关闭modal
      force: {
        type: Boolean,
        default: false
      },
      // 自定义组件transition
      transition: {
        type: String,
        default: 'modal'
      },
      toasttext: {
        type: String,
        default: 'OK'
      },
      // 点击确定时关闭Modal
      // 默认为false，由父组件控制prop.show来关闭
      closeWhenOK: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        duration: null
      };
    },
    computed: {
      modalClass () {
        return {
          'modal-lg': this.large,
          'modal-sm': this.small,
          'modal-full': this.full
        }
      }
    },
    mounted () {
      if (this.show) {
        document.body.className += ' modal-open';
      }
    },
    beforeDestroy () {
      document.body.className = document.body.className.replace(/\s?modal-open/, '');
    },
    watch: {
      show (value) {

        // 在显示时去掉body滚动条，防止出现双滚动条
        if (value) {
          document.body.className += ' modal-open';
        }
        // 在modal动画结束后再加上body滚动条
        else {
          if (!this.duration) {
            this.duration = window.getComputedStyle(this.$el)['transition-duration'].replace('s', '') * 1000;
          }
          window.setTimeout(() => {
            document.body.className = document.body.className.replace(/\s?modal-open/, '');
          }, this.duration || 0);
        }
      }
    },
    methods: {
      cancel () {
        this.$emit('cancel');
      },
    }
  };
</script>

<style scoped>
  .modal {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    display: block;
    opacity: 1;
    z-index: 999;
  }
  .modal-transition {
    transition: all .6s ease;
  }
  .modal-leave {
    /* 样式没什么用，但可以让根标签的transitionEnd生效，以去掉modal-leave */
    border-radius: 1px !important;
  }
  .modal-transition .toast-dialog, .modal-transition .modal-backdrop {
    transition: all .5s ease;
  }
  .modal-enter .toast-dialog, .modal-leave .toast-dialog {
    opacity: 0;
    transform: translateY(-30%);
  }
  .modal-enter .modal-backdrop, .modal-leave .modal-backdrop {
    opacity: 0;
  }
  .toast-dialog {
    position: relative;
    top: 30%;
    width: 150px;
    display: block;
    overflow: hidden;
    float: none;
    border-radius: 250px;
    margin: 0 auto;
    background-color: #333;
    text-align: center;
    color: #fff;
  }
  .modal-body {
    padding: 5px 8px;
  }
</style>
