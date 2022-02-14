<template>
  <div>
    <w-app>
      <div>
        <w-flex>
          <w-button class="home grow" color="white" bg-color="info-dark2"
            >Home
          </w-button>
        </w-flex>
        <br />
        <w-flex>
          <w-button class="about grow" color="white" bg-color="info-dark2"
            >About
          </w-button>
        </w-flex>
        <w-flex>
          <w-button class="signout grow" color="white" bg-color="info-dark2"
            >Sign Out
          </w-button>
        </w-flex>
      </div>
    </w-app>
  </div>
</template>

<style scoped>
.home {
  top: 44px;
}

.about {
  top: 30px;
}

.signout {
  top:40px;
}
</style>
