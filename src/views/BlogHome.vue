<template>
  <transition name="fade" mode="out-in">
    <!-- Vue conditional to check if there is any content in document -->
    <div key="1" v-if="hasContent" class="page">
      <div class="home">
        <!-- Button to edit document in dashboard -->
        <prismic-edit-button :documentId="documentId" />
        <!-- Template for page title -->
        <!-- <h1 class="blog-title">
        {{ $prismic.richTextAsPlain(fields.headline) }}
        </h1>-->
        <!-- Template for page description -->
        <!-- <p class="blog-description">{{ $prismic.richTextAsPlain(fields.description) }}</p> -->
      </div>
      <!-- Vue reference for blog posts component -->
      <blog-posts />
    </div>
    <!-- If no content return message -->
    <!-- <div v-else class="home">
    <p>Please add some content to your blog home document.</p>
    </div>-->
  </transition>
</template>

<script>
import BlogPosts from "../components/BlogPosts.vue";

export default {
  name: "blog-home",
  components: {
    BlogPosts
  },
  data() {
    return {
      prevHeight: 0,
      documentId: "",
      fields: {
        headline: null,
        description: null,
        image: null
      },
      posts: [],
      linkResolver: this.$prismic.linkResolver,
      hasContent: false
    };
  },
  methods: {
    getContent() {
      //Query to get home content
      this.$prismic.client.getSingle("blog_home").then(document => {
        if (document) {
          this.documentId = document.id;
          this.fields.headline = document.data.headline;
          this.fields.description = document.data.description;
          this.fields.image = document.data.image.url;

          //Check that the blog home contains content
          this.checkForContent();
        } else {
          //returns error page
          this.$router.push({ name: "not-found" });
        }
      });
    },
    //Function to check for any content on the blog home page
    checkForContent() {
      if (
        this.fields.image != undefined ||
        this.$prismic.richTextAsPlain(this.fields.headline) !== "" ||
        this.$prismic.richTextAsPlain(this.fields.description) !== ""
      ) {
        this.hasContent = true;
      }
    }
  },
  created() {
    this.getContent();
    window.prismic.setupEditButton();
  }
};
</script>

<style scoped>
.home { 
  padding-top: 30px;
  max-width: 700px;
  margin: auto;
  text-align: center;
}
.home .blog-avatar {
  height: 140px;
  width: 140px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  margin: 1em auto;
}
.home .blog-description {
  font-size: 18px;
  color: #9a9a9a;
  line-height: 30px;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  font-family: "Lato", sans-serif;
  border-bottom: 1px solid #dadada;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.6s;
  transition-property: opacity;
  transition-timing-function: ease;
  overflow: hidden;
}
.fade-enter, .fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* Media Queries */
@media (max-width: 767px) {
  .home {
    padding: 0 20px;
  }
}
</style>
