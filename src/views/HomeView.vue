<template>
  <div data-bs-target="#timer-settings" data-bs-toggle="modal" class="position-absolute" style="z-index: 9999;"><button
      class="btn btn-primary">Hello</button></div>
  <div class="container-fluid w-100 h-100" :class="pageState.bg">
    <div class="d-flex flex-column justify-content-between h-100">
      <div class="">
        <div class="d-flex justify-content-between align-items-center px-md-5 mt-2 mt-md-5">
          <svg @click="promptSetting" xmlns="http://www.w3.org/2000/svg" width="10vmin" height="10vmin"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings c-pointer">
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
            <svg v-if="mode == 1" xmlns="http://www.w3.org/2000/svg" width="45vmin" height="45vmin" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-target">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            </svg>
            <svg v-else-if="mode == 2" xmlns="http://www.w3.org/2000/svg" width="45vmin" height="45vmin"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-recharging">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" />
              <path d="M3.186 10.209a9 9 0 0 0 0 3.508" />
              <path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" />
              <path d="M10.209 20.814a9 9 0 0 0 3.5 0" />
              <path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" />
              <path d="M20.814 13.791a9 9 0 0 0 0 -3.508" />
              <path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" />
              <path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" />
              <path d="M12 8l-2 4h4l-2 4" />
              <path d="M12 21a9 9 0 0 0 0 -18" />
            </svg>
          </div>
          <div class="d-flex align-items-center justify-content-center mb-2">
            <h1 class="main-title me-md-3">{{ pageState.bigText }}</h1>
            <svg v-if="mode == 1" xmlns="http://www.w3.org/2000/svg" width="30vmin" height="30vmin" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-target d-none d-md-block">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            </svg>
            <svg v-else-if="mode == 2" xmlns="http://www.w3.org/2000/svg" width="30vmin" height="30vmin"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-recharging d-none d-md-block">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" />
              <path d="M3.186 10.209a9 9 0 0 0 0 3.508" />
              <path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" />
              <path d="M10.209 20.814a9 9 0 0 0 3.5 0" />
              <path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" />
              <path d="M20.814 13.791a9 9 0 0 0 0 -3.508" />
              <path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" />
              <path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" />
              <path d="M12 8l-2 4h4l-2 4" />
              <path d="M12 21a9 9 0 0 0 0 -18" />
            </svg>
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
            <button class="btn d-flex align-items-center justify-content-center"
              :class="pageState.timeClass, pageState.countDownClass">
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
            <h2 class="sub-title text-center mb-3">{{ rehatDetail[nextRehat].text }}</h2>
            <button class="btn btn-outline-warning w-75">Overtime: 00 : 55</button>
            <h3 class="text-center mt-3 fs-4">Tempoh Rehat: {{ rehatDetail[nextRehat].length }} Minit</h3>
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
    <div id="focus-prompt" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content bg-primary">
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
            <h2 class="sub-title text-center mb-3">Masa untuk Fokus !</h2>
            <button class="btn btn-outline-warning w-75 mb-4">Terlebih Rehat: 00 : 55</button>
            <div class="d-flex align-items-center justify-content-center">
              <h2 class="fs-4 me-3">Menulis</h2>
              <button class="btn btn-outline-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
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
          </div>
          <div class="modal-footer d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <button type="button" class="btn btn-outline-danger me-1"><svg xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-player-stop">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" />
                </svg></button>
            </div>
            <button type="button" class="btn btn-success">Let's GO!</button>
          </div>
        </div>
      </div>
    </div>
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
            <div class="d-flex flex-column justify-content-start w-100">
              <button class="btn btn-outline-light w-100 fs-1 mb-3 d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="5vh" height="5vh" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-user-square-rounded">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                  <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                  <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
                </svg>
                <span class="ms-2">Pengguna</span>
              </button>
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
              <button class="btn btn-outline-light w-100 fs-1 mb-3 d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="5vh" height="5vh" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-target-arrow">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12 7a5 5 0 1 0 5 5" />
                  <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
                  <path d="M15 6v3h3l3 -3h-3v-3z" />
                  <path d="M15 9l-3 3" />
                </svg>
                <span class="ms-2">Target</span>
              </button>
            </div>
            <button class="btn btn-outline-danger w-100 fs-3 mb-3" data-bs-dismiss="modal"
              aria-label="Close">Tutup</button>
          </div>
          <!-- <div class="modal-footer d-flex align-items-center justify-content-end">
            <button type="button" class="btn btn-outline-warning">Batal</button>
            <button type="button" class="btn btn-success">Simpan</button>
          </div> -->
        </div>
      </div>
    </div>
    <SettingModal id="timer-settings" title="Tetapan > Timer">
      <div class="d-flex flex-column justify-content-start w-100">
        <div class="d-flex mb-2">
          <button class="btn btn-outline-light fs-5 w-100 d-flex align-items-center justify-content-center" disabled>
            <span class="ms-2">Tempoh Fokus (Minit)</span>
          </button>
          <input type="number" class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="5">
        </div>
        <div class="d-flex mb-2">
          <button class="btn btn-outline-light fs-5 w-100 d-flex align-items-center justify-content-center" disabled>
            <span class="ms-2">Rehat Pendek (Minit)</span>
          </button>
          <input type="number" class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="5">
        </div>
        <div class="d-flex mb-2">
          <button class="btn btn-outline-light fs-5 w-100 d-flex align-items-center justify-content-center" disabled>
            <span class="ms-2">Rehat Panjang (Minit)</span>
          </button>
          <input type="number" class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="5">
        </div>
        <button data-bs-target="#timer-rehat-settings" data-bs-toggle="modal" data-bs-dismiss="modal" class="btn btn-outline-light w-100 fs-3 mb-2 d-flex align-items-center justify-content-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-stack-middle">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M16 10l4 -2l-8 -4l-8 4l4 2" />
            <path d="M12 12l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z" fill="currentColor" />
            <path d="M8 14l-4 2l8 4l8 -4l-4 -2" />
          </svg>
          <span class="ms-2">Tetapan Rehat</span>
        </button>
        <button data-bs-target="#timer-overtime-settings" data-bs-toggle="modal" data-bs-dismiss="modal" class="btn btn-outline-light w-100 fs-3 mb-2 d-flex align-items-center justify-content-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-clock-bolt">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20.984 12.53a9 9 0 1 0 -7.552 8.355" />
            <path d="M12 7v5l3 3" />
            <path d="M19 16l-2 3h4l-2 3" />
          </svg>
          <span class="ms-2">Tetapan Overtime</span>
        </button>
        <button data-bs-target="#timer-lebihrehat-settings" data-bs-toggle="modal" data-bs-dismiss="modal" class="btn btn-outline-light w-100 fs-3 mb-2 d-flex align-items-center justify-content-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-hammer">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11.414 10l-7.383 7.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l7.407 -7.385" />
            <path
              d="M18.121 15.293l2.586 -2.586a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-2.586 2.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0z" />
          </svg>
          <span class="ms-2">Tetapan Terlebih Rehat</span>
        </button>
      </div>
      <button data-bs-target="#main-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
        class="btn btn-outline-warning w-100 fs-3 mb-3" aria-label="Close">Kembali
      </button>
    </SettingModal>
    <SettingModal id="timer-rehat-settings" title="Tetapan > Timer > Rehat">
      <div class="d-flex flex-column justify-content-start w-100">

      </div>
      <button data-bs-target="#timer-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
        class="btn btn-outline-warning w-100 fs-3 mb-3" aria-label="Close">Kembali
      </button>
    </SettingModal>
    <SettingModal id="timer-overtime-settings" title="Tetapan > Timer > Overtime">
      <div class="d-flex flex-column justify-content-start w-100">

      </div>
      <button data-bs-target="#timer-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
        class="btn btn-outline-warning w-100 fs-3 mb-3" aria-label="Close">Kembali
      </button>
    </SettingModal>
    <SettingModal id="timer-lebihrehat-settings" title="Tetapan > Timer > Terlebih Rehat">
      <div class="d-flex flex-column justify-content-start w-100">

      </div>
      <button data-bs-target="#timer-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
        class="btn btn-outline-warning w-100 fs-3 mb-3" aria-label="Close">Kembali
      </button>
    </SettingModal>
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
import SettingModal from '../components/SettingModal.vue'

export default {
  components: { SettingModal },
  data() {
    return {
      mode: 2,
      nextRehat: 2,
      rehatDetail: [
        null,
        {
          text: "Rehat Sebentar !",
          length: 5,
        },
        {
          text: "Masa untuk Rehat !",
          length: 25,
        },
      ],
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
  watch: {
    mode(newVal, oldVal) {
      this.pageState = this.states[newVal]
    }
  },
  methods: {
    promptSetting() {
      var myModalEl = document.querySelector('#main-settings')
      var modal = bootstrap.Modal.getOrCreateInstance(myModalEl)
      modal.toggle()
    },
    promptBreak() {
      var myModalEl = document.querySelector('#break-prompt')
      var modal = bootstrap.Modal.getOrCreateInstance(myModalEl)
      modal.toggle()
    },
    promptFocus() {
      var myModalEl = document.querySelector('#focus-prompt')
      var modal = bootstrap.Modal.getOrCreateInstance(myModalEl)
      modal.toggle()
    }
  }
}
</script>