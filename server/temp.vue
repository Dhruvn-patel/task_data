<template>
  <div class="excel data">
    <div>
      <form>
        <input
          type="file"
          name="file"
          @change="onSelectFile($event)"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  setup() {
    const onSelectFile = async (e) => {
      const files = e.target.files;
      const formData = new FormData();
      formData.append("file", files[0]);
      console.log("e :>> ", formData);

      const res = await fetch("http://localhost:3001/upload", {
        method: "POST",
        body: formData,
      });
      console.log("res :>> ", res);
    };
    return {
      onSelectFile,
    };
  },
};
</script>
<style scoped></style>
