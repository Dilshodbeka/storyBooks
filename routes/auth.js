const passport = require("passport");
const router = require("express").Router();

// @desc   Auth with google
// @route  GET /auth/google

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @desc   Goole auth callback
// @route  GET /auth/google/callback

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

// @desc Loguot user
// @route /auth/loguot
router.get('/logout', (req, res)=> {
  req.logout()
  res.redirect('/')
})



module.exports = router;
