import { AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button, Tooltip, Avatar } from "@mui/material"

export const Header = () => {
    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        KOKI SAKAI
                    </Typography>
                    <Box sx={{ flexGrow: 1}}>

                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            あああ
                        </Button>

                    </Box>

                    
                </Toolbar>
            </Container>
        </AppBar>
    )
}