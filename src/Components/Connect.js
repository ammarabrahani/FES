import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Connect = () => {
  return (
    <div className="flex lg:justify-evenly justify-start flex-wrap  pb-16  ">
      <div className="mt-5">
        <p className="text-white font-bold client my-5">
          Lets get started <span className="sm:block inline">with us</span>
        </p>
        <p className="text-white sm:text-lg text-base">
          for further info & support,{" "}
          <a className="text-[var(--prime-one)] underline">Contact us</a>
        </p>
      </div>{" "}
      <div className="flex items-center bg-[var(--prime-one)] sm:px-28 px-4 sm:py-20 py-5 my-5 lg:w-auto w-full">
        {" "}
        <form
          action="#"
          className="flex items-center sm:flex-nowrap flex-wrap "
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            {" "}
            <TextField
              id="standard-basic"
              label="Enter your email"
              variant="standard"
            />
          </Box>

          <button class=" bg-black text-white sm:py-4 py-1 sm:px-6 px-2 mx-2   sm:w-auto w-full">
            SEND{" "}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Connect;
