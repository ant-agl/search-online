<template>
  <!-- Style switcher -->
  <div
    id="style-switcher"
    @click="toggleSwitcher"
    :style="{ left: switcherLeft }"
  >
    <div>
      <h6>Select your color</h6>
      <ul class="pattern list-unstyled mb-0">
        <li>
          <a
            class="color-list color1"
            href="javascript:void(0);"
            @click.prevent="loadTheme('light')"
          ></a>
        </li>
        <li>
          <a
            class="color-list color2"
            href="javascript:void(0);"
            @click.prevent="loadTheme('blue')"
          ></a>
        </li>
        <li>
          <a
            class="color-list color3"
            href="javascript:void(0);"
            @click.prevent="loadTheme('green')"
          ></a>
        </li>
      </ul>
      <div class="mt-3">
        <h6>Light/dark Layout</h6>
        <div class="text-center mt-3">
          <!-- light-dark mode -->
          <a
            href="javascript:void(0);"
            id="mode"
            class="mode-btn text-white rounded-3"
            @click="toggleMode"
          >
            <i class="uil uil-brightness mode-dark mx-auto"></i>
            <i class="uil uil-moon mode-light"></i>
          </a>
          <!-- END light-dark Mode -->
        </div>
      </div>
    </div>
    <div class="bottom d-none d-md-block">
      <a href="javascript:void(0);" class="settings rounded-end"
        ><i class="mdi mdi-cog mdi-spin"></i
      ></a>
    </div>
  </div>
  <!-- end switcher-->

  <!--start back-to-top-->
  <button @click="topFunction" id="back-to-top">
    <i class="mdi mdi-arrow-up"></i>
  </button>
  <!--end back-to-top-->
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  name: "AppTheme",
  data() {
    return {
      theme: localStorage.getItem("theme") || "light",
      themeNight: localStorage.getItem("themeNight") || "light",
      currentStyleApp: null,
      currentStyleBootstrap: null,
    };
  },
  watch: {
    theme(newTheme) {
      this.loadTheme(newTheme);
    },
  },
  mounted() {
    this.loadTheme(this.theme);
    // this.toggleMode();
  },
  methods: {
    loadTheme(theme) {
      // Remove old styles if they exist
      //   if (this.currentStyleApp) {
      //     document.head.removeChild(this.currentStyleApp);
      //   }
      //   if (this.currentStyleBootstrap) {
      //     document.head.removeChild(this.currentStyleBootstrap);
      //     console.log(document.head);
      //   }

      // Define paths to CSS files
      let appCssPath;
      let bootstrapCssPath;
      switch (theme) {
        case "light":
          appCssPath = import("@/assets/css/app.min.css");
          bootstrapCssPath = import("@/assets/css/bootstrap.min.css");
          break;
        case "green":
          appCssPath = import("@/assets/css/app-green.min.css");
          bootstrapCssPath = import("@/assets/css/bootstrap-green.min.css");
          break;
        case "blue":
          appCssPath = import("@/assets/css/app-blue.min.css");
          bootstrapCssPath = import("@/assets/css/bootstrap-blue.min.css");
          break;
        default:
          return;
      }

      // Create new <link> tags for styles
      this.currentStyleApp = this.createLinkTag(appCssPath);
      this.currentStyleBootstrap = this.createLinkTag(bootstrapCssPath);

      // Append new styles to document head
      document.head.appendChild(this.currentStyleApp);
      document.head.appendChild(this.currentStyleBootstrap);

      // Save theme to local storage
      localStorage.setItem("theme", theme);
    },
    createLinkTag(href) {
      const linkTag = document.createElement("link");
      linkTag.rel = "stylesheet";
      linkTag.href = href;
      return linkTag;
    },
    toggleMode() {
      this.themeNight = this.themeNight === "light" ? "dark" : "light";
      document.body.setAttribute("data-layout-mode", this.themeNight);
      localStorage.setItem("themeNight", this.themeNight);
    },
    topFunction() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    toggleSwitcher() {
      this.switcherLeft = this.switcherLeft === "-165px" ? "0px" : "-165px";
    },
  },
  setup() {
    const switcherLeft = ref("-165px");
    const loading = ref(true);
    const showBackToTop = ref(false);

    const scrollFunction = () => {
      showBackToTop.value = window.scrollY > 100;
    };

    onMounted(() => {
      window.addEventListener("scroll", scrollFunction);
      window.addEventListener("load", () => {
        loading.value = false;
      });
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", scrollFunction);
    });

    return {
      switcherLeft,
      loading,
      showBackToTop,
    };
  },
};
</script>

<style>
/* @import "@/assets/css/app.min.css";
@import "@/assets/css/bootstrap.min.css"; */
@import "@/assets/css/icons.min.css";
</style>
