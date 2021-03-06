<template>
    <div v-show="show" :transition="transition" >
        <div class="modal" @click.self="clickMask">
            <div class="modal-dialog" :class="modalClass">
                <div class="modal-content">
                    <!--Header-->
                    <div class="modal-header">
                        <slot name="header">
                            <a type="button" class="close" @click="cancel">x</a>
                            <h2 class="modal-title">
                                <slot name="title">
                                    {{title}}
                                </slot>
                            </h2>
                        </slot>
                    </div>
                    <!--Container-->
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <!--Footer-->
                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="btn btn-warning" type="button" :class="cancelClass" @click="cancel" name="cancelText">{{cancelText}}</button>
                            <button class="btn btn-success" type="button" :class="okClass" @click="ok" name="okText">{{okText}}</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop in"></div>
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
            title: {
                type: String,
                default: 'Modal'
            },
            small: {
                type: Boolean,
                default: false
            },
            large: {
                type: Boolean,
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
            // 确认按钮text
            okText: {
                type: String,
                default: 'OK'
            },
            // 取消按钮text
            cancelText: {
                type: String,
                default: 'Cancel'
            },
            // 确认按钮className
            okClass: {
                type: String,
                default: 'btn blue'
            },
            // 取消按钮className
            cancelClass: {
                type: String,
                default: 'btn red btn-outline'
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
            ok () {
                this.$emit('ok');
                if (this.closeWhenOK) {
                    // this.show = false;
                }
            },
            cancel () {
                this.$emit('cancel');
                // this.show = false;
            },
            // 点击遮罩层
            clickMask () {
                if (!this.force) {
                    this.cancel();
                }
            }
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
      background-color: rgba(0,0,0,.4);
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
    .modal-transition .modal-dialog, .modal-transition .modal-backdrop {
        transition: all .5s ease;
    }
    .modal-enter .modal-dialog, .modal-leave .modal-dialog {
        opacity: 0;
        transform: translateY(-30%);
    }
    .modal-enter .modal-backdrop, .modal-leave .modal-backdrop {
        opacity: 0;
    }
    .modal-dialog {
      position: relative;
      top: 30%;
      width: 78%;
      margin: 0 auto;
      background-color: #fff;
      padding-bottom: 20px;
    }
    .modal-header {
        padding: 5px 8px;
    }
    .modal-header .close {
      float: right;
      margin-right: 10px;
      line-height: 20px;
    }
    .modal-body {
        padding: 5px 8px;
    }
    .modal-title {
      margin: 0;
      padding-bottom: 5px;
      font-size: 14px;
      text-align: left;
      font-family: "微软雅黑";
      border-bottom: 1px solid #ccc;
    }
    .modal-footer button {
      border: 1px solid #0894ec;
      color: #0894ec;
      text-decoration: none;
      text-align: center;
      border-radius: 0.25rem;
      line-height: 1.25rem;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: none;
      padding: 0 0.5rem;
      margin: 0;
      height: 1.35rem;
      white-space: nowrap;
      position: relative;
      text-overflow: ellipsis;
      font-size: 0.7rem;
      font-family: inherit;
      cursor: pointer;
    }
  button.btn-warning {
    border-color: #ff6600;
    color: #ff6600;
  }
  button.btn-success {
    border-color: #4cd964;
    color: #4cd964;
  }
</style>
