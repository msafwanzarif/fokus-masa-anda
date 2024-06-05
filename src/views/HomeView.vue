<template>
  <div @click="mode = mode % 2 + 1" class="position-absolute" style="z-index: 9999;"><button
      class="btn btn-primary">Hello</button></div>
  <div class="container-fluid w-100 h-100" :class="pageState.bg">
    <div class="d-flex flex-column justify-content-between h-100">
      <div class="">
        <div class="d-flex justify-content-between align-items-center px-md-5 mt-2 mt-md-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="10vmin" height="10vmin" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-settings c-pointer">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          </svg>
          <div class="d-flex align-items-center">
            <button class="btn me-2" :class="pageState.buttonClass"> 09: 45 PM</button>

          </div>
        </div>
      </div>
      <div class="">
        <div class="d-flex flex-column justify-content-between h-100 p-3">
          <div class="d-flex justify-content-center d-md-none">
            <svg v-if="mode == 1" xmlns="http://www.w3.org/2000/svg" width="45vmin" height="45vmin" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-target">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            </svg>
            <svg v-else-if="mode == 2" xmlns="http://www.w3.org/2000/svg"  width="45vmin"  height="45vmin"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-recharging"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" /><path d="M3.186 10.209a9 9 0 0 0 0 3.508" /><path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" /><path d="M10.209 20.814a9 9 0 0 0 3.5 0" /><path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" /><path d="M20.814 13.791a9 9 0 0 0 0 -3.508" /><path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" /><path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" /><path d="M12 8l-2 4h4l-2 4" /><path d="M12 21a9 9 0 0 0 0 -18" /></svg>
          </div>
          <div class="d-flex align-items-center justify-content-center mb-2">
            <h1 class="main-title me-md-3">{{ pageState.bigText }}</h1>
            <svg v-if="mode == 1" xmlns="http://www.w3.org/2000/svg" width="30vmin" height="30vmin" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-target d-none d-md-block">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            </svg>
            <svg v-else-if="mode == 2" xmlns="http://www.w3.org/2000/svg"  width="30vmin"  height="30vmin"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-recharging d-none d-md-block"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" /><path d="M3.186 10.209a9 9 0 0 0 0 3.508" /><path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" /><path d="M10.209 20.814a9 9 0 0 0 3.5 0" /><path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" /><path d="M20.814 13.791a9 9 0 0 0 0 -3.508" /><path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" /><path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" /><path d="M12 8l-2 4h4l-2 4" /><path d="M12 21a9 9 0 0 0 0 -18" /></svg>
          </div>
          <div v-if="mode == 1" class="d-flex align-items-center justify-content-center">
            <h2 class="sub-title me-3">Menulis</h2>
            <button class="btn btn-outline-info">
              <svg xmlns="http://www.w3.org/2000/svg" width="6vmin" height="6vmin" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-switch-3">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M3 17h2.397a5 5 0 0 0 4.096 -2.133l.177 -.253m3.66 -5.227l.177 -.254a5 5 0 0 1 4.096 -2.133h3.397" />
                <path d="M18 4l3 3l-3 3" />
                <path d="M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397" />
                <path d="M18 20l3 -3l-3 -3" />
              </svg>
            </button>
          </div>
          <div class="d-flex align-items-center justify-content-center mt-5">
            <button class="btn d-flex align-items-center justify-content-center" :class="pageState.timeClass,pageState.countDownClass">
              <span class="me-2">01 : 12 : 00</span>
              <svg v-if="mode == 1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-clock">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 7v5l3 3" />
              </svg>
            </button>
            <button v-if="mode == 1"
              class="h-100 btn btn-outline-warning text-white d-flex align-items-center justify-content-center">
              <!-- <span class="d-none d-md-block fs-1"> Pause </span> -->
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-player-pause">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class=" text-end">2024 | Safwan Zarif</div>
    </div>
    <div id="break-prompt" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <div class="c-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-settings">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              </svg>
            </div>
          </div>
          <div class="modal-body d-flex flex-column justify-content-around align-items-center py-5">
            <h2 class="sub-title text-center mb-3">Rehat Sebentar !</h2>
            <button class="btn btn-outline-warning w-75">Overtime: 00 : 55</button>
            <h3 class="text-center mt-3 fs-4">Tempoh Rehat: 5 Minit</h3>
          </div>
          <div class="modal-footer d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <button type="button" class="btn btn-outline-danger me-1"><svg xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-player-stop">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" />
                </svg></button>
              <button type="button" class="btn btn-primary d-flex align-items-center">
                <span class="me-2 d-none d-md-block">Fokus Semula</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-rotate-clockwise">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
                </svg>
              </button>
            </div>
            <button type="button" class="btn btn-success">Mulakan Rehat</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-title {
  font-size: 20vmin;
}
.sub-title {
  font-size: 8vmin;
}
.rest-time {
  font-size: 11.5vmin;
}
</style>

<script>
export default {
  data() {
    return {
      mode: 2,
      states: [
        null,
        {
          bg: "",
          bigText: "Fokus",
          timeClass: "fs-1",
          buttonClass: "btn-outline-info",
          countDownClass: "btn-outline-info w-75 me-2",
        },
        {
          bg: "bg-primary",
          bigText: "Rehat",
          timeClass: "rest-time",
          buttonClass: "btn-outline-white",
          countDownClass: "border border-white text-white w-100 mx-3",
        },
      ],
      pageState: {
        bg: "bg-primary",
        bigText: "Rehat",
        timeClass: "fs-1",
        buttonClass: "btn-outline-white",
        countDownClass: "border border-white text-white w-100 mx-3",
      }
    }
  },
  watch:{
    mode(newVal,oldVal){
      this.pageState = this.states[newVal]
    }
  },
  methods: {
    promptBreak() {
      var myModalEl = document.querySelector('#break-prompt')
      var modal = bootstrap.Modal.getOrCreateInstance(myModalEl) // Returns a Bootstrap modal instance
      modal.toggle()
    }
  }
}
</script>