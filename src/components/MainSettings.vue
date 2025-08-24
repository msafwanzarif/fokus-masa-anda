<template>
  <div id="main-settings" class="modal fade" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-md-down modal-lg p-3 px-md-5 modal-dialog-centered">
      <div class="modal-content h-100">
        <div class="modal-header">
          <h5 class="modal-title">Tetapan</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body d-flex flex-column justify-content-between align-items-center p-3 p-md-5"
          style="height: 75vh;">
          <div class="w-100">
            <div class="d-flex flex-column justify-content-start w-100">
              <button data-bs-target="#user-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
                class="btn btn-outline-light w-100 fs-1 mb-3 d-flex align-items-center justify-content-center">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="5vh"  height="5vh"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                <span class="ms-2">User</span>
              </button>
            </div>
            <div class="d-flex flex-column justify-content-start w-100">
              <button data-bs-target="#timer-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
                class="btn btn-outline-light w-100 fs-1 mb-3 d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="5vh" height="5vh" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-clock-2">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
                  <path d="M12 7v5l3 3" />
                  <path d="M4 12h1" />
                  <path d="M19 12h1" />
                  <path d="M12 19v1" />
                </svg>
                <span class="ms-2">Timer</span>
              </button>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-start w-100">
            <button @click="$emit('start-day')" class="btn btn-outline-primary w-100 fs-3 mb-3" data-bs-dismiss="modal"
              aria-label="Close">Reset Hari</button>
            <button class="btn btn-outline-danger w-100 fs-3 mb-3" data-bs-dismiss="modal"
              aria-label="Close">Tutup</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'start-day'): void
}>()
</script>
