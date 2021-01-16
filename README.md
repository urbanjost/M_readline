# M_readline

A Fortran interface to the commonly available C procedure readline(3c).
to provide a familiar command history interface for interactive programs.

## BUILDING
```bash
    git clone https://github.com/urbanjost/M_readline.git
    cd M_readline/src
    # change Makefile if not using one of the listed compilers
     
    # for gfortran
    make clean
    make gfortran
     
    # for ifort
    make clean
    make ifort

    # for nvfortran
    make clean
    make nvfortran
```
This will compile the M_readline module and build the example programs
in the app/ and example/ sub-directory.

## SUPPORTS FPM
Alternatively, download the github repository and build it with 
fpm ( as described at [Fortran Package Manager](https://github.com/fortran-lang/fpm) )
```bash
     git clone https://github.com/urbanjost/M_readline.git
     cd M_readline
     fpm run
```
or just list it as a dependency in your fpm.toml project file.
```toml
     [dependencies]
     M_readline        = { git = "https://github.com/urbanjost/M_readline.git" }
```
## DOCUMENTATION
  + [M_readline](https://urbanjost.github.io/M_readline/man3.html)
