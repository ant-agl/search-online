<template>
  <!-- Bootstrap Css -->

  <!--Custom Css-->
  <div>
    <div class="main-content">
      <div class="page-content">
        <!-- START SIGN-UP -->
        <section class="bg-auth">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-10 col-lg-12">
                <div class="card auth-box">
                  <div class="row align-items-center">
                    <div class="col-lg-6 text-center">
                      <div class="card-body p-4">
                        <a href="index.html">
                          <img
                            src="../assets/images/logo-light.png"
                            alt=""
                            class="logo-light"
                          />
                          <img
                            src="../assets/images/logo-dark.png"
                            alt=""
                            class="logo-dark"
                          />
                        </a>
                        <div class="mt-5">
                          <img
                            src="../assets/images/auth/sign-up.png"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-lg-6">
                      <div class="auth-content card-body p-5 text-white">
                        <FormAuthUp />
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </div>
                <!--end auth-box-->
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
          <!--end container-->
        </section>
        <!-- END SIGN-UP -->
      </div>
      <!-- End Page-content -->
    </div>
    <!-- end main content-->
  </div>
  <AppInput />
  <!-- END layout-wrapper -->
</template>
<style scoped>
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/icons.min.css";
@import "../assets/css/app.min.css";
</style>
<script>
import FormAuthUp from "@/components/FormAuthUp";

export default {
  name: "SignUp",
  components: {
    FormAuthUp,
  },
};
</script>
