import React, {useState, useEffect} from 'react'
import ManifestationService from '../services/manifestation.service';
import AuthService from '../services/auth.service';
import DocumentService from '../services/document.service'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Paper from '@mui/material/Paper';
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TablePagination from '@mui/material/TablePagination';
  import TableRow from '@mui/material/TableRow';

  const columns=[
    {
      id: 'id_manifestation',
      label: 'Id',
     
     
    },
    {
      id: 'type_demande',
      label: 'Type de la demande',
     
     
    },
    {
      id: 'date_creation',
      label: 'Date création',
      
    
    },
    {
      id: 'intitule',
      label: 'Intitulé',
      
      
    },
    {
      id: 'etat',
      label: 'Etat',
      
      
    },
    {
      id: 'rapport',
      label: 'Déposer votre rapport',
      
      
    },
    {
      id: 'action',
      label: 'Action',
      
      
    }
    
  ]
  
const HistoriqueManifestation=()=>{
    const renderStatus = (param) =>{
        switch(param) {
          case 'en cours':
           return(
            <button type="button" className="btn btn-warning" disabled>En cours</button>
           )

           case 'validée' :
            return(
                <button type="button" className="btn btn-success" disabled>Validée</button>
            )
            case 'refusée' :
                return(
                    <button type="button" className="btn btn-danger" disabled>Refusée</button>
                )
             default:
                    return null;
                }
            }
            
            const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(null);
  const libelle ="rapport";
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [message, setMessage] = useState("");
  
    const currentUser = AuthService.getCurrentUser();
const [manifestations, setManifestations] = useState([]);
const id = currentUser.id;

const upload = (manifestationId) => {
    //let currentFile = selectedFiles[0];
  //  setProgress(0);
    setCurrentFile(currentFile);
    DocumentService.uploadFileManifestation(libelle,currentFile, manifestationId)
      .then((response) => {
        setMessage(response.data.message);
       // return UploadService.getFiles();
       toast.success('file uploaded successfully!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      })
     /* .then((files) => {
        setFileInfos(files.data);
      })*/
      .catch(() => {
       // setProgress(0);
        setMessage("Could not upload the file!");
        toast.error(' Could not upload the selected file', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
       // setCurrentFile(undefined);
      });
  //  setSelectedFiles(undefined);
  };
useEffect(()=>{
    getManifestations()
}, [])

const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

const getManifestations= ()=>{
    ManifestationService.getManifestationsByUserId(id).then((response)=>{
        setManifestations(response.data)
        console.log(response.data);
        
    });

};



const length = manifestations.length;
return (
    <div>
        <section className="single-page-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Historique des demandes pour la manifestation scientifique</h2>
          <ol className="breadcrumb header-bradcrumb">
            <li className="breadcrumb-item"><Link to="/">Acceuil</Link></li>
            <li className="active">Historique des manifestations</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  
      <div className="col-md-12">
      <section className="contact-us" id="contact">
	<div className="container">
		<div className="row">
			
			
			<div className="col-12">
			<div className="title text-center" >
				<h2>Historique des demandes </h2>
			
				<div className="border"></div>
			</div>
			</div>
			<div className = "container">

       {length ===0 ?(
        <section className="page-404 section text-center">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h1>404</h1>
					<h2>Page Not Found</h2>
  					<p>Sorry, but the page you were trying to view does not exist.</p>
					
                      <a href="/home" className="btn btn-primary btn-lg " role="button" aria-disabled="true" araria-pressed="true">Aller à la page d'acceuil</a>
                    
                    <a href="/postuler" className="btn btn-secondary btn-lg " role="button" aria-disabled="true" aria-pressed="true">Postuler</a>
              
				</div>
			</div>
		</div>
	</section>

       ):(
      
          <div className="table-responsive">
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
  <TableContainer sx={{ maxHeight: 440 }}>
    <Table stickyHeader aria-label="sticky table">
      <TableHead >
        <TableRow>
          {columns.map((column) => (
            <TableCell
            class="text-muted"
              key={column.id}
              align={column.align}
              
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {manifestations
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                 <TableCell>{row.id}</TableCell>
                            <TableCell>manifestation scientifique</TableCell>
                            <TableCell>  {row.dateCreation }</TableCell>
                            <TableCell> {row.titreManifestation }</TableCell>  
                            <TableCell> {renderStatus(row.status)}</TableCell>    
                           <TableCell>  <label className="btn btn-default">
        <input type="file" onChange={selectFile} />
      </label></TableCell> 
                           <TableCell>
                          <div className='text-center'>
                          <button type="button" className="btn btn-outline-success"  disabled={!selectedFiles}
        onClick={() => upload(row.id)} >Télécharger</button></div></TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  </TableContainer>
  <TablePagination
    rowsPerPageOptions={[6, 8, 10]}
    component="div"
    count={manifestations.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  />
</Paper>
<ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
                  </div>
       )}

    </div>
    </div>
    </div>
    </section>
    </div>
    </div>
    
)
}
export default HistoriqueManifestation;