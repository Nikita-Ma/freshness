import { useSelector } from 'react-redux'
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import ListIcon from '@mui/icons-material/List'
import FilterListIcon from '@mui/icons-material/FilterList'
import FilterListOffIcon from '@mui/icons-material/FilterListOff'

export const WarningList = () => {
  const productState = useSelector((state) => state.productReducer)
  const filterState = productState.listProducts.filter(
    (item) => item.p_date < 10
  )

  return (
    <>
      <h1>
        Hi there! <br /> List Warning list have {filterState.length} items
      </h1>
      <Link to={'/'} style={{ color: 'blue' }}>
        Back Main
      </Link>
      <>
        {filterState.map((item) => {
          return (
            <>
              <Card
                sx={{
                  minWidth: 300,
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: '10px 0',
                }}
                key={item.p_id}
              >
                <CardContent>
                  <img
                    style={{ width: 50, height: 50 }}
                    src={`http://localhost:5000/v1/images?id=${item.p_img}`}
                    alt={'none'}
                  />
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Name: {item.p_name} | ID: {item.p_id}
                  </Typography>
                  <Typography variant="body2">
                    disposal:{item.p_count}
                    <br />
                    Date{item.p_date}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={'/product/edit'}>
                    <Button size="small">EDIT</Button>
                  </Link>
                  <Link to={'/product/delete'}>
                    <Button size="small">DELETE</Button>
                  </Link>
                </CardActions>
              </Card>
            </>
          )
        })}
      </>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <BottomNavigation sx={{ width: 'auto' }}>
          <Link to={'/'}>
            <BottomNavigationAction
              label="Recents"
              value="recents"
              icon={<ListIcon />}
            />{' '}
          </Link>
          <Link to={'/warning-list'} style={{ backgroundColor: 'greenyellow' }}>
            <BottomNavigationAction
              label="Recents"
              value="recents"
              icon={<FilterListIcon />}
            />
          </Link>
          <Link to={'/hot-list'}>
            <BottomNavigationAction
              label="Recents"
              value="recents"
              icon={<FilterListOffIcon />}
            />
          </Link>
        </BottomNavigation>
      </AppBar>
    </>
  )
}
