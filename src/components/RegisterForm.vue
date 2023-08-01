<template>
      <Card id="leftCard">
            <template #content>
                  <h2 style="padding: 20px">Sign Up</h2>
                  <form style="padding: 20px">
                        <label>Email</label><br />
                        <InputText
                              type="email"
                              placeholder="Email"
                              aria-describedby="username-help"
                              style="border-radius: 22px"
                        />
                        <br /><br />
                        <label>Password</label><br />
                        <InputText
                              type="password"
                              placeholder="password"
                              aria-describedby="username-help"
                              style="border-radius: 22px"
                        />
                        <br /><br />
                        <label>Repeat Password</label><br />
                        <InputText
                              type="password"
                              placeholder="Repeat password"
                              aria-describedby="username-help"
                              style="border-radius: 22px"
                        />
                        <br><br>
                        <Button
                              label="Sign Up"
                              style="border-radius: 22px"
                        ></Button
                        ><br /><br />
                        <router-link
                              to="/signin"
                              style="text-decoration: none; color: gray"
                              >Do you have an accont?, Sign In</router-link
                        >
                  </form>
            </template>
      </Card>
</template>

<style scoped>
#leftCard {
      border-radius: 22px;
      height: 500px;
      max-height: 500px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
            0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
