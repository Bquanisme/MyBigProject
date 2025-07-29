import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login } from '../../Redux/ReduxAuth/Slice/authSlice'
import { Box, Button, Divider, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BgImage from '../../assets/news4.jpg'; 
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [message, setMessage] = useState('');

    const auth = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const location = useLocation();

    useEffect(() => {
        if (location.state?.success) {

        const timeout = setTimeout(() => {
            navigate(location.pathname, { replace: true, state: {} });
        }, 100); 

        return () => clearTimeout(timeout);
        }
    }, [location, navigate]);


    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    const handleLogin = () => {
        dispatch(login({ email, password, device_token: "xxx111xxx" }));
        console.log(email, password)
    };

    useEffect(() => {
        if (auth.user) {
            navigate('/User')
        }
    }, [auth.user, navigate])

    return (
        <Box sx={{
            backgroundImage: `url(${BgImage})`, 
            width: '100%',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center'
        }}
        >
          
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Card 
                sx={{ 
                    width: 650, 
                    height: 600, 
                }}
                >
                    <CardContent>
                    <Typography gutterBottom variant="h4" component="div" sx={{margin: 2, fontWeight: '600'}}>
                        Đăng nhập
                    </Typography>
                    <Divider sx={{ margin: 3, borderColor: 'lightgray' }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary', margin: 2, marginTop: 4 }}>
                        <form onSubmit={handleLogin}>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                <Typography sx={{color: 'red'}}>*</Typography>
                                <Typography sx={{color: 'black'}}>Email</Typography>
                            </Box>
                            <Box>
                                <input 
                                    placeholder="Email" 
                                    name="email" 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{
                                    width: '100%', 
                                    margin: 3, 
                                    marginTop: 15,
                                    height: '40px',
                                    borderRadius: '7px',
                                    borderStyle: 'solid',
                                    borderColor: 'lightgrey',
                                    paddingLeft: 12
                                    }}
                                />
                                </Box><br />

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography sx={{ color: 'red' }}>*</Typography>
                                <Typography sx={{ color: 'black' }}>Mật khẩu</Typography>
                                </Box>

                                {/* Bọc input và icon chung trong 1 container position: relative */}
                                <Box sx={{ position: 'relative' }}>
                                <input 
                                    placeholder="Password" 
                                    name="password" 
                                    type={showPassword ? 'text' : 'password'}
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{
                                    width: '100%', 
                                    margin: 3, 
                                    marginTop: 15,
                                    height: '40px',
                                    borderRadius: '7px',
                                    borderStyle: 'solid',
                                    borderColor: 'lightgrey',
                                    paddingLeft: 12,
                                    paddingRight: 45 // chừa chỗ cho icon
                                    }}
                                />

                                <Box
                                    sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: 7,
                                    transform: 'translateY(-30%)',
                                    borderRadius: '7px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 30,
                                    height: 30,
                                    backgroundColor: 'white',
                                    }}
                                >
                                    <Button onClick={handleShowPassword} sx={{ minWidth: 'auto', padding: 0 }}>
                                    {showPassword ? (
                                        <VisibilityIcon sx={{ height: 23, color: 'black' }} />
                                    ) : (
                                        <VisibilityOffIcon sx={{ height: 23, color: 'black' }} />
                                    )}
                                    </Button>
                                </Box>
                                </Box>
                                <br />
                            <Box>
                                <Button 
                                    onClick={handleLogin}
                                    variant="contained"
                                >
                                    Đăng nhập
                                </Button>
                                {message && <p style={{ color: 'green' }}>{message}</p>}
                                {auth.error && <h4 style={{ color: 'red', margin: 3 , marginTop: 13}}>{auth.error}</h4>} 
                            </Box><br />
                            <Divider sx={{ margin: 3, borderColor: 'lightgray' }} >
                            <Typography style={{ 
                                textAlign: 'center',
                                color: 'black',
                                fontWeight: '600'
                            }}
                            >
                                Or
                            </Typography>
                            </Divider>
                            <Typography style={{ 
                                color: 'black',
                                margin: 3
                            }}
                            >
                                <Typography sx={{display: 'flex', gap: 1 }}>
                                    Chưa có tài khoản ?
                                    <Link to="/Register" style={{ textDecoration: 'none'}}> 
                                        Đăng ký
                                    </Link>                         
                                </Typography> 
                            </Typography>
                            <Typography sx={{marginTop: '20px'}}>
                                <Link to="/" style={{ textDecoration: 'none', margin: 3}}>Quay về trang chủ</Link>
                            </Typography>
                        </form>
                    </Typography>
                    </CardContent>
                </Card>
        
        </Box>
        </Box>
    )
}

export default Login
