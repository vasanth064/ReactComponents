import React, { useState } from 'react';
import {
	AppBar,
	Typography,
	Toolbar,
	Button,
	IconButton,
	Avatar,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Menu,
	MenuItem,
	ListItemIcon,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AppHeaderData from './data/AppHeaderData';
import { Link } from 'react-router-dom';
const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		visibility: 'show',
		[theme.breakpoints.up('md')]: {
			visibility: 'hidden',
			display: 'none',
		},
	},
	drawer: {
		width: drawerWidth,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	root: {
		display: 'flex',
	},
	respTitle: {
		flexGrow: 1,
		[theme.breakpoints.up('md')]: {
			flexGrow: 0,
		},
	},
	routerLink: {
		textDecoration: 'none',
		color: 'inherit',
	},
}));

const AppHeader = () => {
	const classes = useStyle();

	const [headerMenuOpen, setheaderMenuOpen] = useState(false);

	const [avatarMenuAnchorEl, setAvatarMenuAnchorEl] = useState(null);
	const open = Boolean(avatarMenuAnchorEl);
	const avatarMenuClick = (event) => {
		setAvatarMenuAnchorEl(event.currentTarget);
	};
	const avatarMenuClose = () => {
		setAvatarMenuAnchorEl(null);
	};
	return (
		<div>
			<Drawer
				variant='permanent'
				anchor='left'
				style={headerMenuOpen ? { display: 'flex' } : { display: 'none' }}
				classes={{ paper: classes.drawerPaper }}
				className={classes.drawer}>
				<Toolbar />
				<List>
					{AppHeaderData.map((item) =>
						item.headerMenuItems.map((item, index) => (
							<Link to={item.path} className={classes.routerLink}>
								<ListItem key={index} button>
									{item.icon}
									<ListItemText primary={item.text} sx={{ ml: 3 }} />
								</ListItem>
							</Link>
						))
					)}
				</List>
			</Drawer>
			<AppBar
				position='fixed'
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 3 }}
						className={classes.sectionMobile}
						onClick={() => setheaderMenuOpen(!headerMenuOpen)}>
						<MenuIcon />
					</IconButton>
					<Box style={{ flexGrow: 1 }} className={classes.sectionDesktop}>
						{AppHeaderData.map((item) =>
							item.headerMenuItems.map((item, index) => (
								<Link to={item.path} className={classes.routerLink}>
									<Button
										color='inherit'
										key={index}
										startIcon={item.icon}
										sx={{ mr: 3 }}>
										{item.text}
									</Button>
								</Link>
							))
						)}
					</Box>
					{AppHeaderData.map((item) => (
						<>
							<Link to='/' className={classes.routerLink}>
								<Typography
									variant='h6'
									sx={{ mr: 3 }}
									className={classes.respTitle}>
									{item.title}
								</Typography>
							</Link>
							<Box>
								<IconButton sx={{ p: 0 }} onClick={avatarMenuClick}>
									<Avatar alt={item.title} src={item.avatarImage} />
								</IconButton>
							</Box>
							<Menu
								anchorEl={avatarMenuAnchorEl}
								open={open}
								onClose={avatarMenuClose}
								onClick={avatarMenuClose}
								PaperProps={{
									elevation: 0,
									sx: {
										overflow: 'visible',
										filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
										mt: 1.5,
										'& .MuiAvatar-root': {
											width: 32,
											height: 32,
											ml: -0.5,
											mr: 1,
										},
										'&:before': {
											content: '""',
											display: 'block',
											position: 'absolute',
											top: 0,
											right: 14,
											width: 10,
											height: 10,
											bgcolor: 'background.paper',
											transform: 'translateY(-50%) rotate(45deg)',
											zIndex: 0,
										},
									},
								}}
								transformOrigin={{ horizontal: 'right', vertical: 'top' }}
								anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
								{item.avatarMenuItems.map((item, index) => (
									<Link to={item.path} className={classes.routerLink}>
										<MenuItem>
											<ListItemIcon>{item.icon}</ListItemIcon>
											<ListItemText>{item.text}</ListItemText>
										</MenuItem>
									</Link>
								))}
							</Menu>
						</>
					))}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default AppHeader;
