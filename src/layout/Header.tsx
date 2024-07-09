import { useNavigate } from '@solidjs/router'
import { Box, AppBar, Typography, Button, Toolbar } from '@suid/material'

const Header = () => {
  const navigation = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Header MENU</Typography>
          <Button onclick={() => navigation('/')} color="inherit">
            Home
          </Button>
          <Button onclick={() => navigation('/about')} color="inherit">
            About
          </Button>
          <Button onclick={() => navigation('/login')} color="inherit">
            Login
          </Button>
          <Button onclick={() => navigation('/users')} color="inherit">
            User List
          </Button>
          <Button onclick={() => navigation('/users/1')} color="inherit">
            User 1
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Header
