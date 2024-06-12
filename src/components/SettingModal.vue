<template>
  <div :id="id" class="modal fade" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen-md-down modal-lg p-3 px-md-5 modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content h-100">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div class="modal-body d-flex flex-column justify-content-between align-items-center p-3 p-md-5"
            style="height: 75vh;">
          <slot></slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    title:{default:"No Title",type:String},
    id:String,
  }

}
</script>