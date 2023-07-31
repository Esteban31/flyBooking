
<template>
      <div class="card">
            <MegaMenu id="TopNav">
                  <template #start>
                        <img alt="logo" src="../assets/logo.png" height="24" class="mr-2" />
                  </template>
                  <template #end>
                        <Button label="Start" icon="pi pi-user" iconPos="right" style="border-radius: 22px;" />
                  </template>
            </MegaMenu>
      </div>
  </template>
  
  <script setup>
  
  </script>

<style scoped>
      #TopNav{
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            margin: 20px;
            border-radius: 22px;
            background-color: white;
      }
</style>