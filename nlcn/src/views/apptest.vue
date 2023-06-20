<template>
  <div>
    <button @click="myFunction">Scroll</button>

    <div id="myDIV">
      <div id="content">
        <p>Some text inside an element.</p>
        <p>Some text inside an element.</p>
        <p>Some text inside an element.</p>
      </div>
    </div>
  </div>
</template>
<script>
const myFunction = () => {
  const element = document.getElementById('content')
  element.scrollIntoView()
}
</script>
<style>
#myDIV {
  height: 250px;
  width: 250px;
  overflow: auto;
  background: coral;
}

#content {
  margin: 500px;
  height: 800px;
  width: 2000px;
  background-color: coral;
}
</style>
