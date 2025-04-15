<template>
  <div class="position-absolute" style="z-index: 9999;"><button class="btn btn-primary" @click="test">Test 1</button><button class="btn btn-primary" @click="test2">Test 2</button></div>
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
            <button class="btn me-2" :class="pageState.buttonClass"> {{ currentTime }}</button>

          </div>
        </div>
      </div>
      <div class="">
        <div class="d-flex flex-column justify-content-between h-100 p-3">
          <div class="d-flex justify-content-center d-md-none">
            <svg v-if="mode < 2" xmlns="http://www.w3.org/2000/svg" width="45vmin" height="45vmin" viewBox="0 0 24 24"
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
            <svg v-else-if="mode == 3" xmlns="http://www.w3.org/2000/svg" width="45vmin" height="45vmin"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-armchair">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
              <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
              <path d="M6 19v2" />
              <path d="M18 19v2" />
            </svg>
            <svg v-else-if="mode == 4" xmlns="http://www.w3.org/2000/svg" width="45vmin" height="45vmin" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-notebook">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
              <path d="M13 8l2 0" />
              <path d="M13 12l2 0" />
            </svg>
          </div>
          <div class="d-flex align-items-center justify-content-center mb-2">
            <h1 class="main-title me-md-3">{{ pageState.bigText }}</h1>
            <svg v-if="mode < 2" xmlns="http://www.w3.org/2000/svg" width="30vmin" height="30vmin" viewBox="0 0 24 24"
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
            <svg v-else-if="mode == 3" xmlns="http://www.w3.org/2000/svg" width="30vmin" height="30vmin"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-armchair d-none d-md-block">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
              <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
              <path d="M6 19v2" />
              <path d="M18 19v2" />
            </svg>
            <svg v-else-if="mode == 3" xmlns="http://www.w3.org/2000/svg" width="30vmin" height="30vmin"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-armchair d-none d-md-block">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
              <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
              <path d="M6 19v2" />
              <path d="M18 19v2" />
            </svg>
            <svg v-else-if="mode == 4" xmlns="http://www.w3.org/2000/svg" width="30vmin" height="30vmin" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-notebook d-none d-md-block">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
              <path d="M13 8l2 0" />
              <path d="M13 12l2 0" />
            </svg>
          </div>
          <!-- <div v-if="mode < 2" class="d-flex align-items-center justify-content-center">
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
          </div> -->
          <div class="d-flex align-items-center justify-content-center mt-5">
            <button @click="mode < 2 ? showClock = !showClock : null"
              class="btn d-flex align-items-center justify-content-center"
              :class="pageState.timeClass, pageState.countDownClass">
              <span class="me-2" v-if="showClock || mode > 1">{{ hours }}{{ hours ? " : " : "" }}{{ minutes }} : {{
                seconds }}</span>
              <svg v-if="mode < 2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-clock">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 7v5l3 3" />
              </svg>
            </button>
            <button @click="pauseTimer" v-if="mode == 1"
              class="h-100 btn btn-outline-warning text-white d-flex align-items-center justify-content-center me-2">
              <!-- <span class="d-none d-md-block fs-1"> Pause </span> -->
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-player-pause">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
              </svg>
            </button>
            <button v-if="mode == 0" @click="startTimer"
              class="h-100 btn btn-outline-warning text-white d-flex align-items-center justify-content-center">
              <!-- <span class="d-none d-md-block fs-1"> Pause </span> -->
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-player-play">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 4v16l13 -8z" />
              </svg>
            </button>
            <button v-else @click="fastForward"
              class="h-100 btn btn-outline-light border border-white text-white d-flex align-items-center justify-content-center">
              <!-- <span class="d-none d-md-block fs-1"> Pause </span> -->
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-player-track-next">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5v14l8 -7z" />
                <path d="M14 5v14l8 -7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class=" text-end">2025 | Safwan Zarif</div>
    </div>
    <div id="startPrompt" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-md modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <div @click="promptSetting" class="c-pointer">
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
            <h2 class="sub-title text-center mb-3">Let's do this!</h2>
            <p class="text-center fs-5">Mulakan dengan Bismillah 😄</p>
          </div>
          <div class="modal-footer d-flex align-items-center justify-content-center">
            <button @click="startFocus()" type="button" class="btn btn-success">Let's GO!</button>
          </div>
        </div>
      </div>
    </div>
    <div id="welcome-prompt" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" :class="{'modal-md': last_online,'modal-lg':!last_online}">
        <div class="modal-content">
          <div class="modal-header">
            <div @click="promptSetting" class="c-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-settings">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              </svg>
            </div>
            <span class="ms-2" v-if="!last_online"> <-- butang setting di sini</span>
          </div>
          <div class="modal-body d-flex flex-column justify-content-around align-items-center py-3 py-md-5">
            <h2 class="welcome-title text-center mb-3" :class="{'first-time-title':!last_online}">{{ welcome.title }}</h2>
            <p class="text-center fs-6">Hari ini: <b>{{ welcome.dayLine }}</b></p>
            <div v-if="last_online" class="py-2 px-5 border border-light rounded-4 mt-2">
              <h2 class="quote-text fs-5 text-center fst-italic">" {{ welcome.motivationQuote }} "</h2>
            </div>
            <div v-else class="mx-4 px-4 py-2 border border-light rounded-2">
              <p class="fs-6 fs-md-5">Jom <b>fokuskan masa anda</b> dengan memanfaatkan <a href="https://medschoolinsiders.com/pre-med/the-pomodoro-technique/" target="_blank">teknik pomodoro</a>, kaedah yang dapat meningkatkan produktiviti anda! </p>
              <p class="fs-6 fs-md-5">Anda boleh tekan butang setting di atas untuk <b>tetapkan timer, susunan rehat dan kawalan overtime</b> yang sesuai dengan anda</p>
              <p class="fs-6 fs-md-5">Pada setiap permulaan hari, anda juga disarankan menggunakan sedikit masa untuk 'Plan' dahulu segala tugasan yang anda ingin buat.</p>
              <p class="fs-6 fs-md-5"><i>"Semoga Berjaya 😄"</i> - Safwan Zarif di <a href="mailto:">safzardevs@gmail.com</a></p>
            </div>

          </div>
          <div class="modal-footer d-flex align-items-center justify-content-center">
            <button type="button" class="btn btn-primary" @click="startPlanning">Mulakan Planning Dahulu</button>
            <button type="button" class="btn btn-success" @click="startFocus(true)" data-bs-dismiss="modal">Terus Fokus!</button>
          </div>
        </div>
      </div>
    </div>
    <div id="break-prompt" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <div @click="promptSetting" class="c-pointer">
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
            <button v-if="isOvertime" class="btn btn-outline-warning w-75">Overtime: {{ hoursOvertime }}{{ hoursOvertime ? " : " : "" }}{{ minutesOvertime }} : {{
              secondsOvertime }}</button>
            <button v-else class="btn btn-outline-info w-75 d-flex justify-content-center"><span style="min-width: 2.3rem;font-weight: bold;">{{ timer.extra_pad - secondsAfterDue }}</span> <span>saat sebelum overtime</span></button>
            <h3 class="text-center mt-3 fs-4">Tempoh Rehat:{{ timer.break[nextRehat] > 0 ? ` ${timer.break[nextRehat]}
              Minit`:"" }}{{ timer.breakSecond[nextRehat] > 0 ? ` ${timer.breakSecond[nextRehat]} Saat` : "" }} </h3>
          </div>
          <div class="modal-footer d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <button @click="stopTimer()" type="button" class="btn btn-outline-danger me-1"><svg
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-player-stop">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" />
                </svg></button>
              <button @click="fokusSemula" type="button" class="btn btn-primary d-flex align-items-center">
                <span class="me-2 d-none d-md-block">Fokus Semula</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-rotate-clockwise">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
                </svg>
              </button>
            </div>
            <button type="button" class="btn btn-success" @click="startBreak">Mulakan Rehat</button>
          </div>
        </div>
      </div>
    </div>
    <div id="pause-prompt" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content">
          <div class="modal-header">
            <div @click="promptSetting" class="c-pointer">
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
            <h2 class="sub-title text-center mb-3">Paused !</h2>
            <button class="btn btn-outline-warning w-75 mb-4">Masa yang Tinggal: {{ hours }}{{ hours ? " : " : "" }}{{
              minutes }} : {{ seconds }}</button>
          </div>
          <div class="modal-footer d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <button @click="stopTimer()" type="button" class="btn btn-outline-danger me-1"><svg
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-player-stop">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" />
                </svg></button>
            </div>
            <button @click="resumeTimer" type="button" class="btn btn-success">Sambung</button>
          </div>
        </div>
      </div>
    </div>
    <div id="focus-prompt" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content bg-primary">
          <div class="modal-header">
            <div @click="promptSetting" class="c-pointer">
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
            <button v-if="isOvertime" class="btn btn-outline-warning w-75 mb-4">Overtime Rehat: {{ hoursOvertime }}{{ hoursOvertime ? " : " : "" }}{{ minutesOvertime }} : {{
              secondsOvertime }}</button>
            <button v-else class="btn btn-outline-light w-75 mb-4 d-flex justify-content-center"><span style="min-width: 2.3rem;font-weight: bold;">{{ timer.extra_pad - secondsAfterDue }}</span> <span>saat sebelum overtime</span></button>
            <!-- <div class="d-flex align-items-center justify-content-center">
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
            </div> -->
          </div>
          <div class="modal-footer d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <button @click="stopTimer()" type="button" class="btn btn-outline-danger me-1"><svg
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-player-stop">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" />
                </svg></button>
            </div>
            <button @click="startFocus()" type="button" class="btn btn-success">Let's GO!</button>
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
              <!-- <button class="btn btn-outline-light w-100 fs-1 mb-3 d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="5vh" height="5vh" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-user-square-rounded">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                  <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                  <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
                </svg>
                <span class="ms-2">Pengguna</span>
              </button> -->
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
              <!-- <button class="btn btn-outline-light w-100 fs-1 mb-3 d-flex align-items-center justify-content-center">
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
              </button> -->
            </div>
            <div class="d-flex flex-column justify-content-start w-100">
              <button @click="runStartOfDay" class="btn btn-outline-primary w-100 fs-3 mb-3" data-bs-dismiss="modal"
                aria-label="Close">Reset Hari</button>
              <button class="btn btn-outline-danger w-100 fs-3 mb-3" data-bs-dismiss="modal"
                aria-label="Close">Tutup</button>
            </div>
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
        <div class="d-flex mb-2 fw-bold">
          <button class="btn btn-outline-light fs-5 w-100 d-flex align-items-center justify-content-center fw-bold"
            disabled>
            Tetapan Tempoh
          </button>
          <button class="btn btn-outline-light fs-5 w-25 d-flex align-items-center justify-content-center fw-bold"
            disabled>
            Minit
          </button>
          <button class="btn btn-outline-light fs-5 w-25 d-flex align-items-center justify-content-center fw-bold"
            disabled>
            Saat
          </button>
        </div>
        <div class="d-flex mb-2">
          <button class="btn btn-outline-light fs-5 w-100 d-flex align-items-center justify-content-center" disabled>
            <span class="ms-2">Fokus</span>
          </button>
          <input v-model="timer.focusTime" type="number"
            class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
          <input v-model="timer.focusSecond" type="number" max="59"
            class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
        </div>
        <div class="d-flex mb-2">
          <button class="btn btn-outline-light fs-5 w-100 d-flex align-items-center justify-content-center" disabled>
            <span class="ms-2">Planning</span>
          </button>
          <input v-model="timer.planTime" type="number"
            class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
          <input v-model="timer.planSecond" type="number" max="59"
            class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
        </div>
        <div class="d-flex mb-2">
          <button class="btn btn-outline-light fs-5 w-100 d-flex align-items-center justify-content-center" disabled>
            <span class="ms-2">Rehat Pendek</span>
          </button>
          <input v-model="timer.break[1]" type="number"
            class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
          <input v-model="timer.breakSecond[1]" type="number" max="59"
            class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
        </div>
        <div class="d-flex mb-2">
          <button class="btn btn-outline-light fs-5 w-100 d-flex align-items-center justify-content-center" disabled>
            <span class="ms-2">Rehat Panjang</span>
          </button>
          <input v-model="timer.break[2]" type="number"
            class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
          <input v-model="timer.breakSecond[2]" type="number" max="59"
            class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
        </div>
        <button data-bs-target="#timer-rehat-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
          class="btn btn-outline-light w-100 fs-3 mb-2 d-flex align-items-center justify-content-center">
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
        <button data-bs-target="#timer-overtime-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
          class="btn btn-outline-light w-100 fs-3 mb-2 d-flex align-items-center justify-content-center">
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
      </div>
      <button data-bs-target="#main-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
        class="btn btn-outline-warning w-100 fs-3 mb-3" aria-label="Close">Kembali
      </button>
    </SettingModal>
    <SettingModal id="timer-rehat-settings" title="Tetapan > Timer > Rehat">
      <div class="d-flex flex-column justify-content-start w-100">
        <label class="form-label fs-5">Jenis Susunan Rehat</label>
        <div class="w-100 mb-2 ">
          <div class="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
            <input v-model="timer.simpleStack" type="radio" class="btn-check" name="jenismudah" id="jenismudah"
              :value="true">
            <label class="btn btn-outline-light fs-4" for="jenismudah">Mudah</label>
            <input v-model="timer.simpleStack" type="radio" class="btn-check" name="jenismudah" id="jeniscustom"
              :value="false">
            <label class="btn btn-outline-light fs-4" for="jeniscustom">Custom</label>
          </div>
        </div>
        <div v-if="timer.simpleStack" class="d-flex mb-2">
          <button class="btn btn-outline-light fs-3 w-100 d-flex align-items-center justify-content-center" disabled>
            <span class="ms-2">Bilangan Rehat</span>
          </button>
          <input v-model="timer.breakNumber" type="number"
            class="form-control w-25 h-100 bg-dark text-white fs-2 border border-light" min="1">
        </div>
        <hr>
        <label class="form-label fs-4">Susunan Cycle Rehat</label>
        <div class="w-100">
          <div class="list-group">
            <div v-for="item, index in timer.stack" class="list-group-item">
              <div class="d-flex align-items-center justify-content-between">
                <span :class="{ 'fw-bold': item == 2 }">{{ index + 1 }}) Rehat {{ item == 1 ? "Pendek" : "Panjang"
                  }}</span>
                <div class="d-flex align-items-center">
                  <button v-if="!timer.simpleStack" @click="changeStack(index)" class="btn btn-outline-light me-2">
                    Tukar </button>
                  <button v-if="!timer.simpleStack" @click="removeStack(index)" class="btn btn-outline-light"> Buang
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button v-if="!timer.simpleStack" @click="pushStack()" class="btn btn-outline-light w-100 mt-3">
            Tambah</button>
        </div>
        <template v-if="stackNotSame">
          <hr>
          <label class="form-label fs-4">Susunan Sekarang</label>
          <div class="w-100">
            <div class="list-group">
              <div v-for="item, index in stack" class="list-group-item">
                <span :class="{ 'fw-bold': item == 2 }">{{ index + 1 }}) Rehat {{ item == 1 ? "Pendek" : "Panjang"
                  }}</span>
              </div>
            </div>
            <button @click="resetStack" class="btn btn-outline-light w-100 mt-3"> Samakan</button>
          </div>
        </template>
      </div>
      <button data-bs-target="#timer-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
        class="btn btn-outline-warning w-100 fs-3 mt-5" aria-label="Close">Kembali
      </button>
    </SettingModal>
    <SettingModal id="timer-overtime-settings" title="Tetapan > Timer > Overtime">
      <div class="d-flex flex-column justify-content-start w-100">
        <div class="d-flex mb-2">
          <button class="btn btn-outline-light fs-4 w-100 d-flex align-items-center justify-content-center" disabled>
            <span class="ms-2">OT Padding (saat)</span>
          </button>
          <input v-model="timer.extra_pad" type="number"
            class="form-control w-25 h-100 bg-dark text-white fs-4 border border-light" min="1">
        </div>
        <span class="fs-6 mb-0">{{`* ${timer.extra_pad} saat pertama selepas tempoh fokus atau rehat tidak akan dikira sebagai overtime`}} </span>
        <hr class="my-2">
        <label class="form-label fs-4 mt-2"> Jika Fokus Overtime :</label>
        <div class="w-100 mb-2">
          <div class="form-check">
            <input v-model="timer.focus_extra_mode" class="form-check-input" type="radio" name="focusExtraMode"
              id="optionsRadios1" :value="1">
            <label class="form-check-label" for="optionsRadios1">
              Kurangkan Fokus seterusnya
            </label>
          </div>
          <div class="form-check">
            <input v-model="timer.focus_extra_mode" class="form-check-input" type="radio" name="focusExtraMode"
              id="optionsRadios2" :value="2">
            <label class="form-check-label" for="optionsRadios2">
              Tambah masa rehat
            </label>
          </div>
          <div class="form-check">
            <input v-model="timer.focus_extra_mode" class="form-check-input" type="radio" name="focusExtraMode"
              id="optionsRadios3" :value="0">
            <label class="form-check-label" for="optionsRadios3">
              Biarkan
            </label>
          </div>
        </div>
        <div v-if="timer.focus_extra_mode == 2" class="mb-2">
          <div class="d-flex">
            <button class="btn btn-outline-light fs-4 w-100 d-flex align-items-center justify-content-center" disabled>
              <span class="ms-2">Nisbah Tukaran</span>
            </button>
            <input v-model="timer.focus_extra_add_rate" type="number"
              class="form-control w-25 bg-dark text-white fs-4 border border-light" min="1">
          </div>
          <div class="mt-1 ">{{`* untuk setiap 1 saat overtime fokus, ${timer.focus_extra_add_rate} saat akan ditambah pada tempoh rehat`}}</div>
        </div>
        <div v-if="timer.focus_extra_mode == 1" class="d-flex mb-2">
          <button class="btn btn-outline-light fs-4 w-100 d-flex align-items-center justify-content-center" disabled>
            <span class="ms-2">Minimum Fokus (minit)</span>
          </button>
          <input v-model="timer.focus_extra_deduct_min" type="number"
            class="form-control w-25 h-100 bg-dark text-white fs-4 border border-light" min="1">
        </div>
        <hr class="my-2">
        <label class="form-label fs-4 mt-2"> Jika Rehat Overtime :</label>
        <div class="w-100 mb-2">
          <div class="form-check">
            <input v-model="timer.rest_extra_mode" class="form-check-input" type="radio" name="restExtraMode"
              id="optionsRadios1" :value="1">
            <label class="form-check-label" for="optionsRadios1">
              Kurangkan Rehat seterusnya
            </label>
          </div>
          <div class="form-check">
            <input v-model="timer.rest_extra_mode" class="form-check-input" type="radio" name="restExtraMode"
              id="optionsRadios2" :value="2">
            <label class="form-check-label" for="optionsRadios2">
              Tambah masa Fokus
            </label>
          </div>
          <div class="form-check">
            <input v-model="timer.rest_extra_mode" class="form-check-input" type="radio" name="restExtraMode"
              id="optionsRadios3" :value="0">
            <label class="form-check-label" for="optionsRadios3">
              Biarkan
            </label>
          </div>
        </div>
        <div v-if="timer.rest_extra_mode == 2" class="mb-2">
          <div class="d-flex">
            <button class="btn btn-outline-light fs-4 w-100 d-flex align-items-center justify-content-center" disabled>
              <span class="ms-2">Nisbah Tukaran</span>
            </button>
            <input v-model="timer.rest_extra_add_rate" type="number"
              class="form-control w-25 bg-dark text-white fs-4 border border-light" min="1">
          </div>
          <div class="mt-1">{{`* untuk setiap 1 saat overtime rehat, ${timer.rest_extra_add_rate} saat akan ditambah pada tempoh fokus`}}</div>
        </div>
        <div v-if="timer.rest_extra_mode == 1" class="d-flex mb-2">
          <button class="btn btn-outline-light fs-4 w-100 d-flex align-items-center justify-content-center" disabled>
            <span class="ms-2">Minimum Rehat (minit)</span>
          </button>
          <input v-model="timer.rest_extra_deduct_min" type="number"
            class="form-control w-25 h-100 bg-dark text-white fs-4 border border-light" min="1">
        </div>
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

.quote-text {
  line-height: 1.3;
}

.sub-title {
  font-size: 8vmin;
}

.welcome-title {
  font-size: 6vmin;
}
.first-time-title{
  font-size: 10vmin;
}
.rest-time {
  font-size: 11.5vmin;
}
</style>

<script>
import SettingModal from '../components/SettingModal.vue'
import moment from 'moment'
import { useWakeLock } from '@vueuse/core'
var intervalRun
import {
  isPermissionGranted,
  requestPermission,
  sendNotification
} from '@tauri-apps/plugin-notification'
import { getAllWindows, getCurrentWindow } from "@tauri-apps/api/window";
import { WebviewWindow } from '@tauri-apps/api/webviewWindow'
import { listen } from '@tauri-apps/api/event';
var unlisten
var webview

export default {
  components: { SettingModal },
  data() {
    return {
      // 0 Not Started / Stopped
      // 1 Focus
      // 2 Short Break
      // 3 Long Break
      // 4 Planning
      welcome: {
        title: "Selamat Datang",
        dayLine: "Rabu, 5 Feb 2025",
        motivationQuote: "Setiap perjalanan menuju kejayaan pasti ada onak dan duri. Teruskan usaha dan semangat, dan jangan sesekali menyerah. Kerana penghujungnya ada kemanisan yang menanti.",
      },
      loading: false,
      mode: 0,
      showClock: true,
      wakeLock: {},
      nextReduce: [0, 0],
      stack: [1, 1, 1, 2],
      due: 0,
      current: 0,
      paused_on: 0,
      last_online: 0,
      timer: {
        focusTime: 25,
        focusSecond: 0,
        planTime: 15,
        planSecond: 0,
        break: [0, 5, 20],
        breakSecond: [0, 0, 0],
        simpleStack: true,
        breakNumber: 4,
        stack: [1, 1, 1, 2],
        extra_pad: 10,
        focus_extra_mode: 0,
        focus_extra_deduct_min: 5,
        focus_extra_add_rate: 0.5,
        rest_extra_mode: 0,
        rest_extra_deduct_min: 1,
        rest_extra_add_rate: 5,
      },
      rehatDetail: [
        null,
        {
          text: "Rehat Sebentar !",
        },
        {
          text: "Masa untuk Rehat !",
        },
      ],
      states: [
        {
          bg: "",
          bigText: "Fokus",
          timeClass: "fs-1",
          buttonClass: "btn-outline-info",
          countDownClass: "btn-outline-info w-75 me-2",
        },
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
        {
          bg: "bg-success",
          bigText: "Rehat",
          timeClass: "rest-time",
          buttonClass: "btn-outline-white",
          countDownClass: "border border-white text-white w-100 mx-3",
        },
        {
          bg: "",
          bigText: "Planning",
          timeClass: "rest-time",
          buttonClass: "btn-outline-white",
          countDownClass: "border border-white text-white w-100 mx-3",
        },
      ],
      pageState: {}
    }
  },
  computed: {
    isOvertime(){
      return this.secondsAfterDue > this.timer.extra_pad
    },
    validTimer() {
      return this.focusInSecond > 0 && this.shortBreakInSecond > 0 && this.longBreakInSecond > 0
    },
    focusInSecond() {
      return this.timer.focusTime * 60 + (this.timer.focusSecond ? this.timer.focusSecond : 0)
    },
    shortBreakInSecond() {
      try {
        return this.timer.break[1] * 60 + (this.timer.breakSecond[1] ? this.timer.breakSecond[1] : 0)
      } catch (error) {
        return 0
      }
    },
    longBreakInSecond() {
      try {
        return this.timer.break[2] * 60 + (this.timer.breakSecond[2] ? this.timer.breakSecond[2] : 0)
      } catch (error) {
        return 0
      }
    },
    shortBreakMinute() {
      return this.timer.break[1]
    },
    longBreakMinute() {
      return this.timer.break[2]
    },
    focusMinute() {
      return this.timer.focusTime
    },
    focusSecond() {
      return this.timer.focusSecond
    },
    shortBreakSecond() {
      return this.timer.breakSecond[1]
    },
    longBreakSecond() {
      return this.timer.breakSecond[2]
    },
    stackNotSame() {
      return JSON.stringify(this.stack) != JSON.stringify(this.timer.stack)
    },
    breakNumber() {
      return this.timer.breakNumber
    },
    simpleStack() {
      return this.timer.simpleStack
    },
    nextRehat() {
      if (this.stack[0]) return this.stack[0]
      return 1
    },
    secondsToDue() {
      return this.due - this.current
    },
    secondsAfterDue() {
      return this.current - this.due
    },
    hours() {
      if (!this.due) {
        if (this.timer.focusTime < 60) return ""
        return Math.floor(this.timer.focusTime / 60).toString().padStart(2, "0")
      }
      if (this.paused_on) {
        let time = this.due - this.paused_on
        if (time < 3600) return ""
        return Math.floor(time / 3600).toString().padStart(2, "0")
      }
      var time = this.secondsToDue
      if (this.passedDue) time = this.secondsAfterDue
      if (time < 3600) return ""
      return Math.floor(time / 3600).toString().padStart(2, "0")
    },
    minutes() {
      if (!this.due) return (this.timer.focusTime % 60).toString().padStart(2, "0")
      var time = this.secondsToDue
      if (this.paused_on) {
        let time = this.due - this.paused_on
        if (time < 60) return "00"
        return (Math.floor(time / 60) % 60).toString().padStart(2, "0")
      }
      if (this.passedDue) time = this.secondsAfterDue
      if (time < 60) return "00"
      return (Math.floor(time / 60) % 60).toString().padStart(2, "0")
    },
    seconds() {
      if (!this.due) return this.timer.focusSecond.toString().padStart(2, "0")
      if (this.paused_on) {
        let time = this.due - this.paused_on
        if (time < 0) return "00"
        return (time % 60).toString().padStart(2, "0")
      }
      var time = this.secondsToDue
      if (this.passedDue) time = this.secondsAfterDue
      if (time < 0) return "00"
      return (time % 60).toString().padStart(2, "0")
    },
    hoursOvertime() {
      if(this.secondsPassedOvertime > 0){
        let time = Math.floor(this.secondsPassedOvertime / 3600)
        if (time <= 0) return ""
        return Math.floor(this.secondsPassedOvertime / 3600).toString().padStart(2, "0")
      }
      return ""
    },
    minutesOvertime() {
      if(this.secondsPassedOvertime > 0){
        return (Math.floor(this.secondsPassedOvertime / 60) % 60).toString().padStart(2, "0")
      } 
      return "00"
    },
    secondsPassedOvertime(){
      return this.secondsAfterDue - this.timer.extra_pad
    },
    secondsOvertime(){
      if(this.secondsPassedOvertime > 0){
        return (this.secondsPassedOvertime % 60).toString().padStart(2, "0")
      } 
      return "00"
    },
    passedDue() {
      if (this.paused_on) return false
      return this.due && this.due <= this.current
    },
    currentTime() {
      if (this.current) return moment(this.current * 1000).format("hh:mm A")
      return "00 : 00 AM"
    }
  },
  watch: {
    validTimer(newVal, oldVal) {
      if (!newVal) {
        if (this.focusInSecond <= 0) {
          if (this.timer.focusTime < 0) this.timer.focusTime = 0
          if (this.timer.focusTime == 0 && this.timer.focusSecond <= 0) this.timer.focusSecond = 5
        }
        if (this.shortBreakInSecond <= 0) {
          if (this.timer.break[1] < 0) this.timer.break[1] = 0
          if (this.timer.break[1] == 0 && this.timer.breakSecond[1] <= 0) this.timer.breakSecond[1] = 5
        }
        if (this.longBreakInSecond <= 0) {
          if (this.timer.break[2] < 0) this.timer.break[2] = 0
          if (this.timer.break[2] == 0 && this.timer.breakSecond[2] <= 0) this.timer.breakSecond[2] = 5
        }
      }
    },
    focusMinute(newVal, oldVal) {
      if (this.loading) return
      if (newVal > 0) this.timer.focusSecond = 0
    },
    shortBreakMinute(newVal, oldVal) {
      if (this.loading) return
      if (newVal > 0) this.timer.breakSecond[1] = 0
    },
    longBreakMinute(newVal, oldVal) {
      if (this.loading) return
      if (newVal > 0) this.timer.breakSecond[2] = 0
    },
    focusSecond(newVal, oldVal) {
      if (newVal > 59) this.timer.focusSecond = 59
      if (newVal < 0) this.timer.focusSecond = 0
    },
    shortBreakSecond(newVal, oldVal) {
      if (newVal > 59) this.timer.breakSecond[1] = 59
      if (newVal < 0) this.timer.breakSecond[1] = 0
    },
    longBreakSecond(newVal, oldVal) {
      if (newVal > 59) this.timer.breakSecond[2] = 59
      if (newVal < 0) this.timer.breakSecond[2] = 0
    },
    mode(newVal, oldVal) {
      this.pageState = this.states[newVal]
    },
    passedDue(newVal, oldVal) {
      if (newVal) this.promptChange(this.mode)
    },
    breakNumber(newVal, oldVal) {
      if (newVal > 1 && this.timer.simpleStack) {
        let newStack = Array(newVal - 1).fill(1)
        newStack.push(2)
        return this.timer.stack = newStack
      }
    },
    simpleStack(newVal, oldVal) {
      if (newVal) {
        let newStack = Array(this.timer.breakNumber - 1).fill(1)
        newStack.push(2)
        return this.timer.stack = newStack
      }
    },
    paused_on(newVal, oldVal) {
      if (newVal) {
        return this.promptPause()
      }
    }
  },
  async mounted() {
    moment.updateLocale('en', {
        weekdays: [
            "Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"
        ],
        months: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September",
            "Oktober", "November", "Disember"
        ]
    });
    this.getFromLocal()
    this.wakeLock = useWakeLock()
    this.pageState = this.states[this.mode]
    this.setTicking()
    // Do you have permission to send a notification?
    let permissionGranted = await isPermissionGranted()

    // If not we need to request it
    if (!permissionGranted) {
      const permission = await requestPermission()
      permissionGranted = permission === 'granted'
    }
    unlisten = await listen('close-control', (event) => {
      console.log(`Closing control`);
      webview.setAlwaysOnTop(false)
    });
    // this.runStartOfDay()
  },
  unmounted(){
    unlisten()
  },
  methods: {
    alert(message){
      alert(message)
    },
    runStartOfDay() {
      this.welcome.title = "Selamat Datang"
      if(this.last_online) this.welcome.title = "Welcome Back!"
      this.resetStack()
      this.stopTimer(this.last_online)
      this.nextReduce = [0, 0]
      this.welcome.dayLine = moment().format("dddd, D MMMM YYYY")
      this.welcome.motivationQuote = "Setiap perjalanan menuju kejayaan pasti ada onak dan duri. Teruskan usaha dan semangat, dan jangan sesekali menyerah. Kerana penghujungnya ada kemanisan yang menanti."
      this.showModal("welcome-prompt")
    },
    resetStack() {
      this.stack = [...this.timer.stack]
    },
    releaseAfter(time = 0) {
      if (!time) time = this.timer.extra_pad * 1000
      setTimeout(() => { this.wakeLock.release() }, time)
    },
    pauseTimer() {
      this.paused_on = moment().unix()
      this.saveToLocal()
      return this.releaseAfter()
    },
    resumeTimer() {
      let lag = this.current - this.paused_on
      this.due = this.due + lag
      this.paused_on = 0
      this.saveToLocal()
      this.wakeLock.request()
      this.promptPause()
    },
    saveToLocal(last_online = undefined) {
      if (last_online === undefined) last_online = moment().unix()
      this.last_online = last_online
      let data = {
        mode: this.mode,
        showClock: this.showClock,
        nextReduce: this.nextReduce,
        stack: this.stack,
        due: this.due,
        paused_on: this.paused_on,
        timer: this.timer,
        last_online,
      }
      localStorage.setItem("fokus-data", JSON.stringify(data))
    },
    getFromLocal() {
      let data = localStorage.getItem("fokus-data")
      // let data = '{"mode":3,"showClock":true,"nextReduce":[36,0],"stack":[1,1],"due":1719028169,"current":1719026369,"paused_on":0,"timer":{"focus":1,"break":[0,5,30],"simpleStack":false,"breakNumber":3,"stack":[2,1,1],"extra_pad":10,"focus_extra_mode":1,"focus_extra_deduct_min":5,"focus_extra_add_rate":0.5,"rest_extra_mode":2,"rest_extra_deduct_min":1,"rest_extra_add_rate":2.5}}'
      if (data) {
        this.loading = true
        let {
          mode,
          showClock,
          nextReduce,
          stack,
          due,
          paused_on,
          last_online,
          timer } = JSON.parse(data)
        this.mode = mode
        this.showClock = showClock
        this.nextReduce = nextReduce
        this.stack = stack
        this.paused_on = paused_on
        this.due = due
        this.timer = timer
        this.last_online = last_online
        if (timer.focusSecond === undefined) {
          this.timer.focusSecond = 0
          this.timer.breakSecond = [0, 0, 0]
        }
        if (timer.planTime === undefined) {
          this.timer.planTime = 15
          this.timer.planSecond = 0
        }
        if (timer.focusTime === undefined) {
          this.timer.focusTime = timer.focus ? timer.focus : 25
        }
        let last2Hour = moment().subtract(2, "hours").unix()
        if (due && !paused_on && due < last2Hour) this.stopTimer(last_online)
        setTimeout(() => {
          this.loading = false
        }, 500)
      }
      if (!this.last_online) return this.runStartOfDay()
      let startOfDay = moment().startOf('day').add(6, 'hours').unix()
      console.log("startOfDay", startOfDay)
      console.log("last_online", this.last_online)
      if (this.last_online < startOfDay) return this.runStartOfDay()
    },
    changeStack(index) {
      if (!this.simpleStack) return this.timer.stack[index] = this.timer.stack[index] % 2 + 1
    },
    removeStack(index) {
      if (!this.simpleStack) return this.timer.stack.splice(index, 1)
    },
    pushStack() {
      if (!this.simpleStack) return this.timer.stack.push(1)
    },
    stopTimer(last_online = undefined) {
      let mode = this.mode
      this.mode = 0
      this.due = 0
      this.releaseAfter()
      if (this.paused_on) {
        this.paused_on = 0
        this.hideModal("pause-prompt")
        if(last_online) return this.saveToLocal(last_online)
        return this.saveToLocal()
      }
      if (mode == 1) {
        this.hideModal("break-prompt")
        if(last_online) return this.saveToLocal(last_online)
        return this.saveToLocal()
      }
      this.promptFocus(true)
      if(last_online) return this.saveToLocal(last_online)
      return this.saveToLocal(last_online)
    },
    fokusSemula() {
      this.promptBreak()
      this.startTimer()
    },
    startPlanning() {
      this.hideModal("welcome-prompt")
      return this.runTimer(4, this.timer.planTime * 60 + this.timer.planSecond)
    },
    startBreak() {
      let currentRehat = this.stack.shift()
      this.promptBreak()
      let toAdd = 0
      if (this.timer.focus_extra_mode && this.timer.extra_pad < this.secondsAfterDue) {
        if (this.timer.focus_extra_mode == 1) {
          this.nextReduce[0] = this.secondsPassedOvertime
        }
        else toAdd = Math.floor(this.secondsPassedOvertime * this.timer.focus_extra_add_rate)
      }
      if (!this.stack.length) this.stack = [...this.timer.stack]
      return this.runTimer(currentRehat + 1, this.timer.break[currentRehat] * 60 + this.timer.breakSecond[currentRehat], toAdd)
    },
    startFocus(startOfDay = false) {
      this.hideModal("focus-prompt")
      if(startOfDay) return this.runTimer(1, this.focusInSecond)
      if (this.mode == 4) {
        this.hideModal("startPrompt")
        return this.runTimer(1, this.focusInSecond)
      }
      let toAdd = 0
      if (this.timer.rest_extra_mode && this.timer.extra_pad < this.secondsAfterDue) {
        if (this.timer.rest_extra_mode == 1) {
          this.nextReduce[1] = this.secondsPassedOvertime
        }
        else toAdd = Math.floor(this.secondsPassedOvertime * this.timer.rest_extra_add_rate)
      }
      return this.runTimer(1, this.focusInSecond, toAdd)
    },
    async promptChange(mode) {
      this.releaseAfter()
      const appWindow = getCurrentWindow();
      if (mode == 1) {
        this.promptBreak()
        // await appWindow.show();
        // await appWindow.setFocus();
        await appWindow.requestUserAttention(2);
        return notifyMe("Break Time!", "Let's take a break")
      }
      if (mode == 4) {
        return this.showModal("startPrompt")
      }
      this.promptFocus()
      // await appWindow.show();
      // await appWindow.setFocus();
      await appWindow.requestUserAttention(1);
      return notifyMe("Focus Time!", "Let's go change the world!")
    },
    getModal(id) {
      var myModalEl = document.querySelector(`#${id}`)
      return bootstrap.Modal.getOrCreateInstance(myModalEl)
    },
    showModal(id) {
      this.getModal(id).show()
    },
    hideModal(id) {
      this.getModal(id).hide()
    },
    toggleModal(id) {
      this.getModal(id).toggle()
    },
    promptSetting() {
      var myModalEl = document.querySelector('#main-settings')
      var modal = bootstrap.Modal.getOrCreateInstance(myModalEl)
      modal.toggle()
    },
    promptPause() {
      var myModalEl = document.querySelector('#pause-prompt')
      var modal = bootstrap.Modal.getOrCreateInstance(myModalEl)
      modal.toggle()
    },
    promptBreak() {
      var myModalEl = document.querySelector('#break-prompt')
      var modal = bootstrap.Modal.getOrCreateInstance(myModalEl)
      modal.toggle()
    },
    promptFocus(close = false) {
      var myModalEl = document.querySelector('#focus-prompt')
      var modal = bootstrap.Modal.getOrCreateInstance(myModalEl)
      if (close) return modal.hide()
      modal.toggle()
    },
    startTimer() {
      this.runTimer(1, this.focusInSecond)
    },
    runTimer(mode, interval, toAdd = 0) {
      console.log("running timer m,i,tA", mode, interval,toAdd)
      this.mode = mode
      let seconds = interval
      // let seconds = 2 //Use for testing
      let reduceMode = mode - 1
      if (reduceMode > 0) reduceMode = 1
      let reduceBy = this.nextReduce[reduceMode]
      if (reduceBy) {
        let minimum = reduceMode ? this.timer.rest_extra_deduct_min * 60 : this.timer.focus_extra_deduct_min * 60
        seconds = seconds - reduceBy
        if (seconds < minimum) seconds = minimum
        this.nextReduce[reduceMode] = 0
      }
      let momentToDue = moment().add(seconds, 'seconds')
      if (toAdd) momentToDue.add(toAdd, 'seconds')
      this.setTicking()
      this.due = momentToDue.unix()
      console.log("due", this.due, this.current, this.secondsToDue)
      this.wakeLock.request()
      return this.saveToLocal()
      // this.due = moment().add('seconds',2).unix()
    },
    setTicking(){
      clearInterval(intervalRun);
      this.updateTime()
      intervalRun = setInterval(this.updateTime, 1000)
    },
    updateTime() {
      this.current = moment().unix()
    },
    fastForward() {
      this.setTicking()
      this.due = moment().add(3, 'seconds').unix()
    },
    async test() {
      // this.saveToLocal(12)
      // webview = (await getAllWindows()).find(w => w.label === 'my-label')
      // if(webview) return webview.setFocus()
      // webview = new WebviewWindow('my-label', {
      //   url: '/translation',skipTaskbar:true
      // });
      // webview.once('tauri://created', function () {
      //   console.log('webview created')
      //   webview.setAlwaysOnTop(true)
      //   webview.setDecorations(false)
      // });
      // webview.once('tauri://error', function (e) {
      //   console.error('webview error', e)
      // });
    },
    async test2() {
      // this.saveToLocal(0)
      let permissionGranted = await isPermissionGranted();

      // If not we need to request it
      if (!permissionGranted) {
        const permission = await requestPermission();
        permissionGranted = permission === 'granted';
      }

      // Once permission has been granted we can send the notification
      if (permissionGranted) {
        sendNotification({ title: 'Tauri is here', largeBody: 'Tauri is awesome!' });
      }
    },
  },
}
</script>