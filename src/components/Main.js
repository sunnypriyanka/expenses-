import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, Typography } from "@material-ui/core";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import ShowChartOutlinedIcon from "@material-ui/icons/ShowChartOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import ViewCarouselOutlinedIcon from "@material-ui/icons/ViewCarouselOutlined";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  cont: {
    justifyContent: "center",
  },
  main: {
    height: 800,
    width: 1200,
    backgroundColor: "#f2f2fe",
    marginTop: "20px",
    borderRadius: "20px",
  },
  topbar: {
    display: "flex",
  },
  contentbar: {
    display: "flex",
  },
  rightside: {
    height: 780,
  },
  timeline: {},
});

export default function Sidebar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container className={classes.cont}>
      <Grid container className={classes.main}>
        <Grid container>
          <Grid item xs={12} className={classes.contentbar}>
            <Grid item xs={2}>
              <Grid item xs={12}>
                <Paper
                  className={classes.rightside}
                  style={{ backgroundColor: "white", padding: "10px" }}
                >
                  <Typography
                    style={{
                      color: "#f8729e",
                      fontWeight: "lighter",
                      marginTop: "20px",
                      marginLeft: "40px",
                      fontSize: "40px",
                      fontStyle: "italic",
                    }}
                  >
                    Pleo
                  </Typography>
                  <Avatar
                    src="https://p.kindpng.com/picc/s/394-3947019_round-profile-picture-png-transparent-png.png"
                    style={{
                      height: "50px",
                      width: "50px",
                      marginLeft: "60px",
                      marginTop: "40px",
                    }}
                  ></Avatar>
                  <Typography
                    style={{
                      marginLeft: "60px",
                      marginTop: "6px",
                      color: "#5a4e4e",
                    }}
                  >
                    Astria
                  </Typography>
                  <Grid style={{ marginLeft: "10px" }}>
                    <Grid style={{ display: "flex" }}>
                      <CreditCardOutlinedIcon
                        style={{
                          color: "grey",
                          fontSize: "18px",
                          marginTop: "40px",
                        }}
                      ></CreditCardOutlinedIcon>
                      <Typography
                        style={{
                          marginTop: "40px",
                          marginLeft: "15px",
                          fontSize: "12px",
                          color: "grey",
                        }}
                      >
                        My Cards
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <Grid
                      item
                      xs={2}
                      style={{
                        borderLeft: "3px solid #e91e63",
                        marginLeft: "-18px",
                      }}
                    >
                      <ShowChartOutlinedIcon
                        style={{
                          color: "#e91e63",
                          fontSize: "20px",
                          marginLeft: "15px",
                        }}
                      ></ShowChartOutlinedIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "grey",
                          fontWeight: "500",
                          marginLeft: "25px",
                          color: "#e91e63",
                        }}
                      >
                        Expenses
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <Grid item xs={2}>
                      <AccountBalanceWalletOutlinedIcon
                        style={{ color: "grey", fontSize: "15px" }}
                      ></AccountBalanceWalletOutlinedIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "grey",
                          marginLeft: "5px",
                        }}
                      >
                        Wallet
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <Grid item xs={2}>
                      <GroupOutlinedIcon
                        style={{ color: "grey", fontSize: "17px" }}
                      ></GroupOutlinedIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "grey",
                          marginLeft: "5px",
                        }}
                      >
                        Manage Team
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <Grid item xs={2}>
                      <ViewCarouselOutlinedIcon
                        style={{ color: "grey", fontSize: "17px" }}
                      ></ViewCarouselOutlinedIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "grey",
                          marginLeft: "5px",
                        }}
                      >
                        Manage Cards
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <Grid item xs={2}>
                      <PermContactCalendarOutlinedIcon
                        style={{ color: "grey", fontSize: "17px" }}
                      ></PermContactCalendarOutlinedIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "grey",
                          marginLeft: "5px",
                        }}
                      >
                        Company profile
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <Grid item xs={2}>
                      <ListOutlinedIcon
                        style={{ color: "grey", fontSize: "15px" }}
                      ></ListOutlinedIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "grey",
                          marginLeft: "5px",
                        }}
                      >
                        Manage Categories
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <Grid item xs={2}>
                      <AccountCircleOutlinedIcon
                        style={{ color: "grey", fontSize: "15px" }}
                      ></AccountCircleOutlinedIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "grey",
                          marginLeft: "5px",
                        }}
                      >
                        My Profile
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>

            <Grid item xs={10}>
              <Grid
                item
                xs={12}
                style={{
                  padding: "20px",
                  marginLeft: "25px",
                  marginRight: "25px",
                  marginTop: "15px",
                }}
              >
                <Grid>
                  <Typography
                    variant="h5"
                    style={{ fontWeight: "400", fontSize: "28px" }}
                  >
                    Expenses
                  </Typography>
                  <Grid style={{ display: "flex", marginTop: "5px" }}>
                    <Typography
                      style={{
                        color: "#625959",
                        fontSize: "13px",
                        marginTop: "3px",
                      }}
                    >
                      Wallet balance
                    </Typography>
                    <Typography
                      style={{
                        marginTop: "3px",
                        fontWeight: "600",
                        fontSize: "13px",
                        marginLeft: "5px",
                      }}
                    >
                      71,180,00 kr
                    </Typography>
                    <SearchOutlinedIcon
                      style={{
                        marginTop: "3px",
                        fontSize: "16px",
                        color: "#4c3674",
                        marginLeft: "150px",
                      }}
                    ></SearchOutlinedIcon>
                    <Typography
                      style={{
                        color: "#c9c8cd",
                        fontSize: "13px",
                        marginLeft: "5px",
                        marginTop: "3px",
                      }}
                    >
                      Search in activity
                    </Typography>
                    <Box
                      style={{
                        display: "flex",
                        padding: "8px",
                        marginLeft: "187px",
                        borderRadius: "15px",
                        backgroundColor: "transparent",
                        height: "10px",
                        width: "80px",
                        border: "1px solid #e3dfdf",
                      }}
                    >
                      <PersonOutlineOutlinedIcon
                        style={{
                          fontSize: "13px",
                          marginLeft: "14px",
                          color: "#837793",
                          marginTop: "-1px",
                        }}
                      ></PersonOutlineOutlinedIcon>
                      <Typography
                        style={{
                          fontSize: "11px",
                          marginLeft: "5px",
                          color: "grey",
                          marginTop: "-3px",
                        }}
                      >
                        Export
                      </Typography>
                    </Box>
                    <Typography
                      style={{
                        marginLeft: "47px",
                        fontSize: "11px",
                        color: "#837793",
                        marginTop: "3px",
                      }}
                    >
                      Filter
                    </Typography>
                    <ListOutlinedIcon
                      style={{
                        color: "#837793",
                        backgroundColor: "#e5e5e8",
                        fontSize: "14px",
                        padding: "5px",
                        borderRadius: "10px",
                        marginLeft: "14px",
                      }}
                    ></ListOutlinedIcon>
                    <LiveHelpOutlinedIcon
                      style={{
                        color: "#837793",
                        backgroundColor: "#e5e5e8",
                        fontSize: "14px",
                        padding: "5px",
                        borderRadius: "10px",
                        marginLeft: "14px",
                      }}
                    ></LiveHelpOutlinedIcon>
                    <PersonOutlineOutlinedIcon
                      style={{
                        color: "#837793",
                        backgroundColor: "#e5e5e8",
                        fontSize: "14px",
                        padding: "5px",
                        borderRadius: "10px",
                        marginLeft: "14px",
                      }}
                    ></PersonOutlineOutlinedIcon>
                  </Grid>
                  <Divider style={{ marginTop: "7px", color: "#8f8f8f1f" }} />
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  backgroundColor: "f2f2fe",
                  marginLeft: "45px",
                  marginRight: "40px",
                  display: "flex",
                }}
              >
                <Box
                  style={{
                    padding: "25px",
                    height: "90px",
                    display: "flex",
                    backgroundColor: "white",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    borderLeft: "3px solid #08bc59",
                  }}
                >
                  <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBr-XrtQd52FdpFt92aYHOz8y_ALpTi5iivg&usqp=CAU"
                    style={{ height: "50px", width: "50px", marginTop: "10px" }}
                  ></Avatar>
                  <Grid>
                    <Typography
                      style={{
                        marginLeft: "18px",
                        fontSize: "20px",
                        color: "#4a4a6c",
                      }}
                    >
                      Amazon
                    </Typography>
                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginLeft: "10px",
                      }}
                    >
                      <PermIdentityOutlinedIcon
                        style={{
                          color: "#4c3674",
                          fontSize: "17px",
                          marginTop: "2px",
                        }}
                      ></PermIdentityOutlinedIcon>
                      <Typography
                        style={{
                          fontSize: "15px",
                          color: "#4c3674",
                          marginLeft: "3px",
                          fontSize: "12px",
                          marginTop: "2px",
                        }}
                      >
                        Niccolo Perra
                      </Typography>
                      <DateRangeIcon
                        style={{
                          color: "#4c3674",
                          fontSize: "17px",
                          marginTop: "2px",
                          marginLeft: "30px",
                        }}
                      ></DateRangeIcon>
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "#4c3674",
                          marginLeft: "5px",
                          marginTop: "2px",
                        }}
                      >
                        13 Aug 2016
                      </Typography>
                      <AccessTimeIcon
                        style={{
                          color: "#4c3674",
                          fontSize: "17px",
                          marginTop: "2px",
                          marginLeft: "25px",
                        }}
                      ></AccessTimeIcon>
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "#4c3674",
                          marginLeft: "5px",
                          marginTop: "2px",
                        }}
                      >
                        21 hours
                      </Typography>
                    </Grid>
                    <Grid style={{ display: "flex", marginLeft: "15px" }}>
                      <Box
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          display: "flex",
                          backgroundColor: "transparent",
                          width: "140px",
                          marginTop: "10px",
                          border: "1px solid #ddd9d9",
                          height: "17px",
                        }}
                      >
                        <ListOutlinedIcon
                          style={{
                            color: "#4c3674",
                            fontSize: "12px",
                            marginLeft: "10px",
                            marginTop: "3px",
                          }}
                        ></ListOutlinedIcon>
                        <Typography
                          style={{
                            color: "#4c3674",
                            marginLeft: "7px",
                            fontSize: "12px",
                            fontWeight: "400",
                            marginTop: "0px",
                          }}
                        >
                          Select a Category
                        </Typography>
                      </Box>

                      <Box
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          display: "flex",
                          backgroundColor: "transparent",
                          width: "90px",
                          marginTop: "10px",
                          marginLeft: "15px",
                          border: "1px solid #ddd9d9",
                          height: "17px",
                        }}
                      >
                        <NoteOutlinedIcon
                          style={{
                            color: "#14a0e3",
                            fontSize: "14px",
                            marginLeft: "10px",
                            marginTop: "1px",
                          }}
                        ></NoteOutlinedIcon>
                        <Typography
                          style={{
                            color: "#4c3674",
                            marginLeft: "5px",
                            fontSize: "12px",
                            fontWeight: "400",
                            marginTop: "0px",
                          }}
                        >
                          Add.Note
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      padding: "10px",
                      marginLeft: "230px",
                      marginRight: "30px",
                    }}
                  >
                    <Typography
                      style={{
                        fontWeight: "500",
                        color: "#08bc59",
                        fontSize: "14px",
                      }}
                    >
                      Refunded
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: "600",
                        color: "#08bc59",
                        fontSize: "18px",
                      }}
                    >
                      200 $
                    </Typography>
                    <Typography
                      style={{
                        color: "#4c3674",
                        fontSize: "15px",
                        marginTop: "5px",
                      }}
                    >
                      300,00 kr
                    </Typography>
                  </Grid>
                </Box>

                <Box
                  style={{
                    padding: "25px",
                    backgroundColor: "white",
                    marginLeft: "2.5px",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    height: "90px",
                  }}
                >
                  <ReceiptOutlinedIcon
                    style={{
                      padding: "20px",
                      fontSize: "40px",
                      color: "#4c3674",
                      marginTop: "10px",
                      fontWeight: "lighter",
                    }}
                  ></ReceiptOutlinedIcon>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                style={{
                  backgroundColor: "f2f2fe",
                  marginLeft: "45px",
                  marginRight: "40px",
                  display: "flex",
                }}
              >
                <Box
                  style={{
                    padding: "25px",
                    height: "90px",
                    display: "flex",
                    backgroundColor: "white",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    marginTop: "8px",
                  }}
                >
                  <Avatar
                    src="https://i.pinimg.com/564x/d4/97/28/d4972800cda9560f1bda8c280486e9b8.jpg"
                    style={{ height: "50px", width: "50px", marginTop: "10px" }}
                  ></Avatar>
                  <Grid>
                    <Typography
                      style={{
                        marginLeft: "23px",
                        fontSize: "20px",
                        color: "#4a4a6c",
                      }}
                    >
                      Starbucks
                    </Typography>
                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginLeft: "15px",
                      }}
                    >
                      <PermIdentityOutlinedIcon
                        style={{
                          color: "#4c3674",
                          fontSize: "17px",
                          marginTop: "2px",
                        }}
                      ></PermIdentityOutlinedIcon>
                      <Typography
                        style={{
                          fontSize: "15px",
                          color: "#4c3674",
                          marginLeft: "3px",
                          fontSize: "12px",
                          marginTop: "2px",
                        }}
                      >
                        Lily Dawson
                      </Typography>
                      <DateRangeIcon
                        style={{
                          color: "#4c3674",
                          fontSize: "17px",
                          marginTop: "2px",
                          marginLeft: "30px",
                        }}
                      ></DateRangeIcon>
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "#4c3674",
                          marginLeft: "5px",
                          marginTop: "2px",
                        }}
                      >
                        13 Aug 2016
                      </Typography>
                      <AccessTimeIcon
                        style={{
                          color: "#4c3674",
                          fontSize: "17px",
                          marginTop: "2px",
                          marginLeft: "25px",
                        }}
                      ></AccessTimeIcon>
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "#4c3674",
                          marginLeft: "5px",
                          marginTop: "2px",
                        }}
                      >
                        21 hours
                      </Typography>
                    </Grid>
                    <Grid style={{ display: "flex", marginLeft: "25px" }}>
                      <Box
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          display: "flex",
                          backgroundColor: "transparent",
                          width: "140px",
                          marginTop: "10px",
                          border: "2px solid #33d50a",
                          height: "17px",
                        }}
                      >
                        <FastfoodOutlinedIcon
                          style={{
                            color: "#33d50a",
                            fontSize: "14px",
                            marginLeft: "10px",
                            marginTop: "1px",
                          }}
                        ></FastfoodOutlinedIcon>
                        <Typography
                          style={{
                            color: "#4c3674",
                            marginLeft: "7px",
                            fontSize: "12px",
                            fontWeight: "400",
                            marginTop: "0px",
                          }}
                        >
                          Meals and drinks
                        </Typography>
                      </Box>

                      <Box
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          display: "flex",
                          backgroundColor: "transparent",
                          width: "110px",
                          marginTop: "10px",
                          marginLeft: "15px",
                          border: "1px solid #ddd9d9",
                          height: "17px",
                        }}
                      >
                        <CheckBoxOutlinedIcon
                          style={{
                            color: "#4c3674",
                            fontSize: "14px",
                            marginLeft: "10px",
                            marginTop: "1px",
                          }}
                        ></CheckBoxOutlinedIcon>
                        <Typography
                          style={{
                            color: "#4c3674",
                            marginLeft: "5px",
                            fontSize: "12px",
                            fontWeight: "400",
                            marginTop: "0px",
                          }}
                        >
                          Note added
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      padding: "10px",
                      marginLeft: "240px",
                      marginRight: "38px",
                    }}
                  >
                    <Typography
                      style={{
                        fontWeight: "400",
                        color: "4c3674",
                        fontSize: "20px",
                        marginTop: "8px",
                      }}
                    >
                      150 $
                    </Typography>
                    <Typography
                      style={{
                        color: "#4c3674",
                        fontSize: "12px",
                        marginTop: "5px",
                      }}
                    >
                      Pending
                    </Typography>
                  </Grid>
                </Box>

                <Box
                  style={{
                    padding: "25px",
                    backgroundColor: "white",
                    marginLeft: "2.5px",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    height: "90px",
                    marginTop: "8px",
                  }}
                >
                  <AddBoxOutlinedIcon
                    style={{
                      padding: "20px",
                      fontSize: "40px",
                      color: "#4099f6",
                      marginTop: "10px",
                      fontWeight: "lighter",
                    }}
                  ></AddBoxOutlinedIcon>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                style={{
                  backgroundColor: "f2f2fe",
                  marginLeft: "45px",
                  marginRight: "40px",
                  display: "flex",
                }}
              >
                <Box
                  style={{
                    padding: "25px",
                    height: "90px",
                    display: "flex",
                    backgroundColor: "white",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    marginTop: "8px",
                  }}
                >
                  <Avatar
                    style={{
                      height: "50px",
                      width: "50px",
                      marginTop: "10px",
                      color: "#14d3f2",
                      fontWeight: "600",
                      backgroundColor: "whitesmoke",
                    }}
                  >
                    SA
                  </Avatar>
                  <Grid>
                    <Typography
                      style={{
                        marginLeft: "25px",
                        fontSize: "20px",
                        color: "#4a4a6c",
                      }}
                    >
                      PVR Cinemas
                    </Typography>
                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginLeft: "15px",
                      }}
                    >
                      <PermIdentityOutlinedIcon
                        style={{
                          color: "#4c3674",
                          fontSize: "17px",
                          marginTop: "2px",
                        }}
                      ></PermIdentityOutlinedIcon>
                      <Typography
                        style={{
                          fontSize: "15px",
                          color: "#4c3674",
                          marginLeft: "3px",
                          fontSize: "12px",
                          marginTop: "2px",
                        }}
                      >
                        Stacy Armijo
                      </Typography>
                      <DateRangeIcon
                        style={{
                          color: "#4c3674",
                          fontSize: "17px",
                          marginTop: "2px",
                          marginLeft: "30px",
                        }}
                      ></DateRangeIcon>
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "#4c3674",
                          marginLeft: "5px",
                          marginTop: "2px",
                        }}
                      >
                        13 Aug 2016
                      </Typography>
                      <AccessTimeIcon
                        style={{
                          color: "#4c3674",
                          fontSize: "17px",
                          marginTop: "2px",
                          marginLeft: "25px",
                        }}
                      ></AccessTimeIcon>
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "#4c3674",
                          marginLeft: "5px",
                          marginTop: "2px",
                        }}
                      >
                        21 hours
                      </Typography>
                    </Grid>
                    <Grid style={{ display: "flex", marginLeft: "25px" }}>
                      <Box
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          display: "flex",
                          backgroundColor: "transparent",
                          width: "140px",
                          marginTop: "10px",
                          border: "2px solid #f238a8",
                          height: "17px",
                        }}
                      >
                        <VideoCallOutlinedIcon
                          style={{
                            color: "#f238a8",
                            fontSize: "20px",
                            marginLeft: "10px",
                            marginTop: "-1px",
                          }}
                        ></VideoCallOutlinedIcon>
                        <Typography
                          style={{
                            color: "#4c3674",
                            marginLeft: "7px",
                            fontSize: "12px",
                            fontWeight: "400",
                            marginTop: "0px",
                          }}
                        >
                          Entertainment
                        </Typography>
                      </Box>

                      <Box
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          display: "flex",
                          backgroundColor: "transparent",
                          width: "110px",
                          marginTop: "10px",
                          marginLeft: "15px",
                          border: "1px solid #ddd9d9",
                          height: "17px",
                        }}
                      >
                        <CheckBoxOutlinedIcon
                          style={{
                            color: "#4c3674",
                            fontSize: "14px",
                            marginLeft: "10px",
                            marginTop: "1px",
                          }}
                        ></CheckBoxOutlinedIcon>
                        <Typography
                          style={{
                            color: "#4c3674",
                            marginLeft: "5px",
                            fontSize: "12px",
                            fontWeight: "400",
                            marginTop: "0px",
                          }}
                        >
                          Add.Note
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      padding: "10px",
                      marginLeft: "235px",
                      marginRight: "39px",
                    }}
                  >
                    <Typography
                      style={{
                        fontWeight: "400",
                        color: "4c3674",
                        fontSize: "20px",
                        marginTop: "8px",
                      }}
                    >
                      280 $
                    </Typography>
                    <Typography
                      style={{
                        color: "#4c3674",
                        fontSize: "12px",
                        marginTop: "5px",
                      }}
                    >
                      Pending
                    </Typography>
                  </Grid>
                </Box>

                <Box
                  style={{
                    padding: "25px",
                    backgroundColor: "white",
                    marginLeft: "2.5px",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    height: "90px",
                    marginTop: "8px",
                  }}
                >
                  <AddBoxOutlinedIcon
                    style={{
                      padding: "20px",
                      fontSize: "40px",
                      color: "#4099f6",
                      marginTop: "10px",
                      fontWeight: "lighter",
                    }}
                  ></AddBoxOutlinedIcon>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                style={{
                  backgroundColor: "f2f2fe",
                  marginLeft: "45px",
                  marginRight: "40px",
                  display: "flex",
                }}
              >
                <Box
                  style={{
                    padding: "25px",
                    height: "90px",
                    display: "flex",
                    backgroundColor: "white",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    marginTop: "8px",
                  }}
                >
                  <Avatar
                    src="https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?quality=86&strip=all"
                    style={{ height: "50px", width: "50px", marginTop: "10px" }}
                  ></Avatar>
                  <Grid>
                    <Typography
                      style={{
                        marginLeft: "25px",
                        fontSize: "20px",
                        color: "#4a4a6c",
                      }}
                    >
                      Overheats PS3 GameZone
                    </Typography>
                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginLeft: "25px",
                      }}
                    >
                      <PermIdentityOutlinedIcon
                        style={{
                          color: "#4c3674",
                          fontSize: "17px",
                          marginTop: "2px",
                        }}
                      ></PermIdentityOutlinedIcon>
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "#4c3674",
                          marginLeft: "5px",
                          marginTop: "2px",
                        }}
                      >
                        Dominique
                      </Typography>
                      <DateRangeIcon
                        style={{
                          color: "#4c3674",
                          fontSize: "17px",
                          marginTop: "2px",
                          marginLeft: "30px",
                        }}
                      ></DateRangeIcon>
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "#4c3674",
                          marginLeft: "5px",
                          marginTop: "2px",
                        }}
                      >
                        13 Aug 2016
                      </Typography>
                      <AccessTimeIcon
                        style={{
                          color: "#4c3674",
                          fontSize: "17px",
                          marginTop: "2px",
                          marginLeft: "25px",
                        }}
                      ></AccessTimeIcon>
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "#4c3674",
                          marginLeft: "5px",
                          marginTop: "2px",
                        }}
                      >
                        21 hours
                      </Typography>
                    </Grid>
                    <Grid style={{ display: "flex", marginLeft: "25px" }}>
                      <Box
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          display: "flex",
                          backgroundColor: "transparent",
                          width: "140px",
                          marginTop: "10px",
                          border: "2px solid #f238a8",
                          height: "17px",
                        }}
                      >
                        <VideoCallOutlinedIcon
                          style={{
                            color: "#f238a8",
                            fontSize: "20px",
                            marginLeft: "10px",
                            marginTop: "-1px",
                          }}
                        ></VideoCallOutlinedIcon>
                        <Typography
                          style={{
                            color: "#4c3674",
                            marginLeft: "7px",
                            fontSize: "12px",
                            fontWeight: "400",
                            marginTop: "0px",
                          }}
                        >
                          Entertainment
                        </Typography>
                      </Box>

                      <Box
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          display: "flex",
                          backgroundColor: "transparent",
                          width: "90px",
                          marginTop: "10px",
                          marginLeft: "15px",
                          border: "1px solid #ddd9d9",
                          height: "17px",
                        }}
                      >
                        <NoteOutlinedIcon
                          style={{
                            color: "#4c3674",
                            fontSize: "14px",
                            marginLeft: "10px",
                            marginTop: "1px",
                          }}
                        ></NoteOutlinedIcon>
                        <Typography
                          style={{
                            color: "#4c3674",
                            marginLeft: "5px",
                            fontSize: "12px",
                            fontWeight: "400",
                            marginTop: "0px",
                          }}
                        >
                          Add.Note
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    style={{
                      padding: "10px",
                      marginLeft: "228px",
                      marginRight: "41px",
                    }}
                  >
                    <Typography
                      style={{
                        fontWeight: "400",
                        color: "4c3674",
                        fontSize: "20px",
                        marginTop: "8px",
                      }}
                    >
                      150 $
                    </Typography>
                    <Typography
                      style={{
                        color: "#4c3674",
                        fontSize: "12px",
                        marginTop: "5px",
                      }}
                    >
                      1 20,00 kr
                    </Typography>
                  </Grid>
                </Box>

                <Box
                  style={{
                    padding: "25px",
                    backgroundColor: "white",
                    marginLeft: "2.5px",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    height: "90px",
                    marginTop: "8px",
                  }}
                >
                  <AddBoxOutlinedIcon
                    style={{
                      padding: "20px",
                      fontSize: "40px",
                      color: "#4099f6",
                      marginTop: "10px",
                      fontWeight: "lighter",
                    }}
                  ></AddBoxOutlinedIcon>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
