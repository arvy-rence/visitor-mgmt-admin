import { IconButton, Box, useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { patronsData } from "../../data/mockData";
import Header from "../../components/Header";
import * as React from "react";
import ManageModal from "../../components/ManageModal";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CustomIconButton from "../../components/CustomIconButton";
import InputBase from '@mui/material/InputBase';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Patrons = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { 
            field: "id2", 
            headerName: "ID", 
            headerAlign: "left",
            align: "left"
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            valueGetter: (params) => `${params.row.firstname || ''} ${params.row.lastname || ''}`,
        },
        {
            field: "birthday",
            headerName: "Birthday",
        },
        {
            field: "sex",
            headerName: "Sex",
        },
        {
            field: "address",
            headerName: "Address"
        },
        {
            field: "email",
            headerName: "Email"
        },
        {
            field: "contact",
            headerName: "Contact"
        },
        {
            field: "dateregistered",
            headerName: "Date Registered"
        }
    ];

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <Box m="20px">
            {/*<Header title="Patrons"/>*/}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px" height="39px" width="300px">
                    <InputBase sx={{ml: 2, flex: 1}} placeholder="Search"/>
                    <IconButton type="button" sx={{p:1}}>
                        <SearchOutlinedIcon/>
                    </IconButton>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-between" width="260px">
                    <CustomIconButton name="EXPORT CSV" icon={<FileUploadOutlinedIcon/>} color={colors.green[500]} onClick={handleOpen}/>
                    <CustomIconButton name="EDIT" icon={<BorderColorOutlinedIcon/>} color={colors.primary[500]} onClick={handleOpen}/>
                    <CustomIconButton name="DELETE" icon={<DeleteOutlineOutlinedIcon/>} color={colors.secondary[500]} onClick={handleOpen}/>
                </Box>
            </Box>
            <ManageModal handleClose={handleClose} open={open}/>
            <Box m="10px 0 0 0" height="75vh" sx={{
                "& .MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none"
                },
                "& .name-column--cell": {
                    color: colors.secondary[500]
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.primary[500],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[900],
                },
                "& .MuiDataGrid-footerContainer": {
                    backgroundColor: colors.primary[500],
                    borderTop: "none"
                },
            }}>
                <DataGrid rows={patronsData} columns={columns} checkboxSelection/>
            </Box>
        </Box>
    );
}

