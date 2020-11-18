<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item
      ><router-link to="/home" style="font-weight: bold; color: #000"
        >首页</router-link
      ></a-breadcrumb-item
    >
    <a-breadcrumb-item>欢迎</a-breadcrumb-item>
    <a-breadcrumb-item>用户列表</a-breadcrumb-item>
  </a-breadcrumb>
  <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
    <!-- 添加用户 -->
    <a-form>
      <a-row>
        <a-col :span="12">
          <a-row :gutter="16">
            <a-col class="gutter-row" :span="16">
              <a-form-item :wrapperCol="{ span: 24 }">
                <a-input-search size="large" placeholder="请输入内容" />
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="8">
              <a-button type="primary" size="large"> 添加用户 </a-button>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>