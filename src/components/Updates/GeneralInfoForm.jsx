import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

const GeneralInfoForm = () => {
  const [birthday, setBirthday] = useState(null);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          General information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="First Name" required fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last Name" required fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <TextField
              id="birthday"
              label="Birthday"
              type="date"
              value={birthday}
              // onChange={onChangeBirthday}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select value={0} fullWidth>
              <MenuItem value={0} disabled>
                Gender
              </MenuItem>
              <MenuItem value={1}>Female</MenuItem>
              <MenuItem value={2}>Male</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" type="email" required fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Phone" type="number" required fullWidth />
          </Grid>
        </Grid>
        <Typography variant="h5" gutterBottom>
          Address
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <TextField label="Address" required fullWidth />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Number" type="number" required fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField label="City" required fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select value={0} fullWidth>
              <MenuItem value={0} disabled>
                State
              </MenuItem>
              <MenuItem value="AL">Alabama</MenuItem>
              {/* Add other states */}
            </Select>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="ZIP" required fullWidth />
          </Grid>
        </Grid>

        <div style={{ marginTop: "1rem" }}>
          <Button variant="contained" color="primary">
            Save All
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeneralInfoForm;
