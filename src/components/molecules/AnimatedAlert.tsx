import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import { AlertContainer } from "../../styles/AnimatedAlert.styled";
import useAlertStore from "../../lib/store/useAlertStore";

function AnimatedAlert() {
  const { closeAlert, text, type, isOpen } = useAlertStore();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AlertContainer>
            <Collapse in={isOpen}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      closeAlert();
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                severity={type}
                sx={{ mb: 2 }}
              >
                {text}
              </Alert>
            </Collapse>
          </AlertContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AnimatedAlert;
