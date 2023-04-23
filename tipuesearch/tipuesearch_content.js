var tipuesearch = {"pages":[{"title":" M_readline ","text":"M_readline M_readline A Fortran interface to the commonly available C procedure readline(3c).\nto provide a familiar command history interface for interactive programs. BUILDING git clone https://github.com/urbanjost/M_readline.git cd M_readline/src # change Makefile if not using one of the listed compilers # for gfortran make clean\n    make gfortran # for ifort make clean\n    make ifort # for nvfortran make clean\n    make nvfortran This will compile the M_readline module and build the example programs\nin the app/ and example/ sub-directory. SUPPORTS FPM Alternatively, download the github repository and build it with \nfpm ( as described at Fortran Package Manager ) git clone https://github.com/urbanjost/M_readline.git cd M_readline\n     fpm run or just list it as a dependency in your fpm.toml project file. [dependencies] M_readline = { git = \"https://github.com/urbanjost/M_readline.git\" } DOCUMENTATION + M_readline Developer Info John Doe","tags":"home","loc":"index.html"},{"title":"system_readline – M_readline","text":"public  subroutine system_readline(line, prompt) Uses iso_c_binding NAME system_readline ( 3 f ) - [ M_readline ] Call readline ( 3 c ) from Fortran ( LICENSE : PD ) SYNOPSIS character(kind=c_char,len=*),intent(in) :: prompt\n character(kind=c_char,len=*),intent(out) :: line DESCRIPTION The system_readline(3f) uses the ISO_C_BINDING module to create a\nbinding to the GNU readline(3c) procedure from Fortran programs. EXAMPLE The test program is basically just a read loop that prompts for lines of input read with readline ( 3 c ) . You can edit the line being read with readline ( 3 c ) per its documentation . At a minimum , you can probably move around the line with the left and right arrow keys , and insert characters by typing them wherever you moved the cursor to , and use the DEL / RUBOUT key to delete characters and such . If you use a GNU / Linux shell with command line editing , you are probably familiar with readline ( 3 c ) 's function. It quits if you enter 'q' on an input line , and it dumps the history if you enter 'h' . It is presented here as a Bourne shell script that creates the necessary files and does a \"compile, load, and go\" the test program program demo_system_readline use m_readline , only : system_readline implicit none character ( len = 256 ) :: line integer :: cstat character ( len = 256 ) :: sstat write ( * , * ) ' ____________________________________________________________' write ( * , * ) '  Your input lines are now editable using the GNU' write ( * , * ) '  readline(3C) procedure. By default, up-arrow and' write ( * , * ) '  down-arrow go thru the history lines; left and right arrow' write ( * , * ) '  keys and delete and just typing characters let you do' write ( * , * ) '  simple editing. Far more input control is available.' write ( * , * ) '  See the browser pages and man(1) pages for readline(3c).' write ( * , * ) ' ____________________________________________________________' write ( * , * ) ' Enter text and then edit it. \"q\" quits; \"h\" display history:' do call system_readline ( line , 'readline>' ) ! read editable input line if ( line . eq . 'q' ) stop call execute_command_line ( trim ( line ), cmdstat = cstat , cmdmsg = sstat ) enddo end program demo_system_readline AUTHOR John S. Urban LICENSE Public Domain Although this interface to readline ( 3 c ) is released as Public Domain , note that the Readline library itself is free software , distributed under the terms of the [ GNU ] General Public License , version 2. Arguments Type Intent Optional Attributes Name character(kind=C_CHAR, len=*), intent(out) :: line character(kind=C_CHAR, len=*), intent(in) :: prompt Contents Source Code system_readline Source Code SUBROUTINE system_readline ( line , prompt ) USE ISO_C_BINDING IMPLICIT NONE ! the routine that calls the C routine CHARACTER ( KIND = C_CHAR , LEN =* ), INTENT ( OUT ) :: line CHARACTER ( KIND = C_CHAR , LEN =* ), INTENT ( IN ) :: prompt ! trim to last non-blank character and append null for C CALL Freadline ( INT ( LEN ( line ), KIND = C_INT ), line , trim ( prompt ) // ACHAR ( 0 )) END SUBROUTINE system_readline","tags":"","loc":"proc/system_readline.html"},{"title":"Freadline – M_readline","text":"interface public  subroutine Freadline(ilen, buf, prompt) bind(C,NAME=\"0\") Arguments Type Intent Optional Attributes Name integer(kind=C_INT), intent(in), VALUE :: ilen character(kind=C_CHAR, len=1), intent(out) :: buf (*) character(kind=C_CHAR, len=1), intent(in) :: prompt (*)","tags":"","loc":"interface/freadline.html"},{"title":"test_suite_M_readline – M_readline","text":"public  subroutine test_suite_M_readline() Uses M_framework__verify setup\nteardown Arguments None Contents Source Code test_suite_M_readline Source Code subroutine test_suite_M_readline () use M_framework__verify , only : unit_check_start , unit_check , unit_check_done , unit_check_good , unit_check_bad , unit_check_msg !! setup call test_system_readline () !! teardown end subroutine test_suite_M_readline","tags":"","loc":"proc/test_suite_m_readline.html"},{"title":"test_system_readline – M_readline","text":"public  subroutine test_system_readline() call unit_check(‘system_readline’, 0.eq.0, ‘checking’,100) Arguments None Contents Source Code test_system_readline Source Code subroutine test_system_readline () call unit_check_start ( 'system_readline' , msg = '' ) !!call unit_check('system_readline', 0.eq.0, 'checking',100) call unit_check_done ( 'system_readline' , msg = '' ) end subroutine test_system_readline","tags":"","loc":"proc/test_system_readline.html"},{"title":"M_readline – M_readline","text":"NAME M_readline(3fm) - [M_readline::INTRO] Calling readline(3c) from Fortran\n  (LICENSE:PD) SYNOPSIS Use M_readline, only : system_readline DESCRIPTION The M_readline(3fm) module uses the ISO_C_BINDING module to create a\nbinding to the GNU readline(3c) procedure from Fortran programs. EXAMPLE The test program is basically just a read loop that prompts for lines of input read with readline ( 3 c ) . You can edit the line being read with readline ( 3 c ) per its documentation . At a minimum , you can probably move around the line with the left and right arrow keys , and insert characters by typing them wherever you moved the cursor to , and use the DEL / RUBOUT key to delete characters and such . If you use a GNU / Linux shell with command line editing , you are probably familiar with readline ( 3 c ) ' s function. It quits if you enter ' q ' on an input line , and it dumps the history if you enter ' h ' . the test program program demo_M_readline use M_readline implicit none character ( len = 256 ) :: line integer :: cstat character ( len = 256 ) :: sstat write ( * , * ) ' ____________________________________________________________' write ( * , * ) '  Your input lines are now editable using the GNU' write ( * , * ) '  readline(3C) procedure. By default, up-arrow and' write ( * , * ) '  down-arrow go thru the history lines; left and right arrow' write ( * , * ) '  keys and delete and just typing characters let you do' write ( * , * ) '  simple editing. Far more input control is available.' write ( * , * ) '  See the browser pages and man(1) pages for readline(3c).' write ( * , * ) ' ____________________________________________________________' write ( * , * ) ' Enter text and then edit it. \"q\" quits; \"h\" display history:' do call system_readline ( line , 'readline>' ) ! read editable input line if ( line . eq . 'q' ) stop ! call system ( trim ( line )) ! common extension call execute_command_line ( trim ( line ), cmdstat = cstat , cmdmsg = sstat ) ! f08 equivalent enddo end program demo_M_readline AUTHOR John S. Urban LICENSE Public Domain Although this interface to readline ( 3 c ) is released as Public Domain , note that the Readline library itself is free software , distributed under the terms of the [ GNU ] General Public License , version 2. Uses iso_c_binding Contents Interfaces Freadline Subroutines system_readline Interfaces interface public  subroutine Freadline(ilen, buf, prompt) bind(C,NAME=\"0\") Arguments Type Intent Optional Attributes Name integer(kind=C_INT), intent(in), VALUE :: ilen character(kind=C_CHAR, len=1), intent(out) :: buf (*) character(kind=C_CHAR, len=1), intent(in) :: prompt (*) Subroutines public  subroutine system_readline (line, prompt) the test program Read more… Arguments Type Intent Optional Attributes Name character(kind=C_CHAR, len=*), intent(out) :: line character(kind=C_CHAR, len=*), intent(in) :: prompt","tags":"","loc":"module/m_readline.html"},{"title":"M_testsuite_M_readline – M_readline","text":"Uses M_framework__verify M_readline Contents Subroutines test_suite_M_readline test_system_readline Subroutines public  subroutine test_suite_M_readline () setup\nteardown Arguments None public  subroutine test_system_readline () call unit_check(‘system_readline’, 0.eq.0, ‘checking’,100) Arguments None","tags":"","loc":"module/m_testsuite_m_readline.html"},{"title":"demo_system_readline – M_readline","text":"Uses M_readline Contents Variables cstat line sstat Source Code demo_system_readline Variables Type Attributes Name Initial integer :: cstat character(len=256) :: line character(len=256) :: sstat Source Code program demo_system_readline use m_readline , only : system_readline implicit none character ( len = 256 ) :: line integer :: cstat character ( len = 256 ) :: sstat write ( * , * ) ' ____________________________________________________________' write ( * , * ) '  Your input lines are now editable using the GNU' write ( * , * ) '  readline(3C) procedure. By default, up-arrow and' write ( * , * ) '  down-arrow go thru the history lines; left and right arrow' write ( * , * ) '  keys and the delete key and just typing characters let you ' write ( * , * ) '  do simple editing. Far more input control is available.' write ( * , * ) '  See the man(1) page for readline(3c) for more information.' write ( * , * ) ' ____________________________________________________________' write ( * , * ) ' Enter commands and then edit them. \"q\" quits; \"h\" display history:' do call system_readline ( line , 'readline>' ) ! read editable input line if ( line . eq . 'q' ) stop call execute_command_line ( trim ( line ), cmdstat = cstat , cmdmsg = sstat ) enddo end program demo_system_readline","tags":"","loc":"program/demo_system_readline.html"},{"title":"demo_M_readline – M_readline","text":"Uses M_readline Contents Variables cstat line sstat Source Code demo_M_readline Variables Type Attributes Name Initial integer :: cstat character(len=256) :: line character(len=256) :: sstat Source Code program demo_M_readline use M_readline implicit none character ( len = 256 ) :: line integer :: cstat character ( len = 256 ) :: sstat write ( * , * ) ' ____________________________________________________________' write ( * , * ) '  Your input lines are now editable using the GNU' write ( * , * ) '  readline(3C) procedure. By default, up-arrow and' write ( * , * ) '  down-arrow go thru the history lines; left and right arrow' write ( * , * ) '  keys and delete and just typing characters let you do' write ( * , * ) '  simple editing. Far more input control is available.' write ( * , * ) '  See the browser pages and man(1) pages for readline(3c).' write ( * , * ) ' ____________________________________________________________' write ( * , * ) ' Enter text and then edit it. \"q\" quits; \"h\" display history:' do call system_readline ( line , 'readline>' ) ! read editable input line if ( line . eq . 'q' ) stop !call system(trim(line))    ! common extension call execute_command_line ( trim ( line ), cmdstat = cstat , cmdmsg = sstat ) ! f08 equivalent enddo end program demo_M_readline","tags":"","loc":"program/demo_m_readline.html"},{"title":"demo_system_readline – M_readline","text":"Uses M_readline Contents Variables cstat line sstat Source Code demo_system_readline Variables Type Attributes Name Initial integer :: cstat character(len=256) :: line character(len=256) :: sstat Source Code program demo_system_readline use m_readline , only : system_readline implicit none character ( len = 256 ) :: line integer :: cstat character ( len = 256 ) :: sstat write ( * , * ) ' ____________________________________________________________' write ( * , * ) '  Your input lines are now editable using the GNU' write ( * , * ) '  readline(3C) procedure. By default, up-arrow and' write ( * , * ) '  down-arrow go thru the history lines; left and right arrow' write ( * , * ) '  keys and delete and just typing characters let you do' write ( * , * ) '  simple editing. Far more input control is available.' write ( * , * ) '  See the browser pages and man(1) pages for readline(3c).' write ( * , * ) ' ____________________________________________________________' write ( * , * ) ' Enter text and then edit it. \"q\" quits; \"h\" display history:' do call system_readline ( line , 'readline>' ) ! read editable input line if ( line . eq . 'q' ) stop call execute_command_line ( trim ( line ), cmdstat = cstat , cmdmsg = sstat ) enddo end program demo_system_readline","tags":"","loc":"program/demo_system_readline~2.html"},{"title":"runtest – M_readline","text":"Uses M_framework__verify M_testsuite_M_readline M_framework__msg Contents Source Code runtest Source Code program runtest use M_framework__msg use M_framework__verify , only : unit_check , unit_check_start , unit_check_good , unit_check_bad , unit_check_done use M_framework__verify , only : unit_check_stop use M_testsuite_M_readline call test_suite_M_readline () call unit_check_stop () end program runtest","tags":"","loc":"program/runtest.html"},{"title":"M_readline.f90 – M_readline","text":"Contents Modules M_readline Source Code M_readline.f90 Source Code !> !!##NAME !!      M_readline(3fm) - [M_readline::INTRO] Calling readline(3c) from Fortran !!      (LICENSE:PD) !!##SYNOPSIS !! !!      Use M_readline, only : system_readline !!##DESCRIPTION !! !!    The M_readline(3fm) module uses the ISO_C_BINDING module to create a !!    binding to the GNU readline(3c) procedure from Fortran programs. !! !!##EXAMPLE !! !! !!    The test program is basically just a read loop that prompts for !!    lines of input read with readline(3c). You can edit the line being !!    read with readline(3c) per its documentation. At a minimum, you can !!    probably move around the line with the left and right arrow keys, and !!    insert characters by typing them wherever you moved the cursor to, !!    and use the DEL/ RUBOUT key to delete characters and such. If you use !!    a GNU/Linux shell with command line editing, you are probably familiar !!    with readline(3c)'s function. !! !!    It quits if you enter 'q' on an input line, and it dumps the history if !!    you enter 'h'. !! !!   the test program !! !!    program demo_M_readline !!       use M_readline !!       implicit none !!       character(len=256):: line !!       integer                       :: cstat !!       character(len=256)            :: sstat !! !!       write(*,*)' ____________________________________________________________' !!       write(*,*)'  Your input lines are now editable using the GNU' !!       write(*,*)'  readline(3C) procedure. By default, up-arrow and' !!       write(*,*)'  down-arrow go thru the history lines; left and right arrow' !!       write(*,*)'  keys and delete and just typing characters let you do' !!       write(*,*)'  simple editing. Far more input control is available.' !!       write(*,*)'  See the browser pages and man(1) pages for readline(3c).' !!       write(*,*)' ____________________________________________________________' !!       write(*,*)' Enter text and then edit it. \"q\" quits; \"h\" display history:' !! !!       do !!          call system_readline(line,'readline>') ! read editable input line !!          if(line.eq.'q') stop !!          !call system(trim(line))    ! common extension !!          call execute_command_line(trim(line),cmdstat=cstat,cmdmsg=sstat) ! f08 equivalent !!       enddo !!    end program demo_M_readline !!##AUTHOR !!    John S. Urban !!##LICENSE !!    Public Domain !! !!    Although this interface to readline(3c) is released as Public Domain, !!    note that the Readline library itself is free software, distributed !!    under the terms of the [GNU] General Public License, version 2. MODULE M_readline ! @(#) Call readline(3c) from Fortran using ISO_C_BINDING ! assumes you have the GNU readline library libreadline.a available USE ISO_C_BINDING IMPLICIT NONE PRIVATE PUBLIC system_readline !------------------------------------------------------------------------------- ! define the call to the C routine ! extern char     *Freadline(int ilen, char *buf, char prompt[]); PUBLIC :: Freadline INTERFACE SUBROUTINE Freadline ( ilen , buf , prompt ) BIND ( C , NAME = 'FCreadline' ) USE ISO_C_BINDING IMPLICIT NONE INTEGER ( KIND = C_INT ), INTENT ( IN ), VALUE :: ilen CHARACTER ( KIND = C_CHAR ), intent ( out ) :: buf ( * ) CHARACTER ( KIND = C_CHAR ), intent ( in ) :: prompt ( * ) END SUBROUTINE Freadline END INTERFACE !------------------------------------------------------------------------------- contains !=================================================================================================================================== !()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()= !=================================================================================================================================== !> !!##NAME !!      system_readline(3f) - [M_readline] Call readline(3c) from Fortran !!      (LICENSE:PD) !!##SYNOPSIS !! !!     character(kind=c_char,len=*),intent(in) :: prompt !!     character(kind=c_char,len=*),intent(out) :: line !! !!##DESCRIPTION !! !!    The system_readline(3f) uses the ISO_C_BINDING module to create a !!    binding to the GNU readline(3c) procedure from Fortran programs. !! !!##EXAMPLE !! !! !!    The test program is basically just a read loop that prompts for !!    lines of input read with readline(3c). You can edit the line being !!    read with readline(3c) per its documentation. At a minimum, you can !!    probably move around the line with the left and right arrow keys, and !!    insert characters by typing them wherever you moved the cursor to, !!    and use the DEL/ RUBOUT key to delete characters and such. If you use !!    a GNU/Linux shell with command line editing, you are probably familiar !!    with readline(3c)'s function. !! !!    It quits if you enter 'q' on an input line, and it dumps the history if !!    you enter 'h'. !! !!    It is presented here as a Bourne shell script that creates the necessary !!    files and does a \"compile, load, and go\" !! !!   the test program !! !!    program demo_system_readline !!       use m_readline, only : system_readline !!       implicit none !!       character(len=256) :: line !!       integer            :: cstat !!       character(len=256) :: sstat !! !!       write(*,*)' ____________________________________________________________' !!       write(*,*)'  Your input lines are now editable using the GNU' !!       write(*,*)'  readline(3C) procedure. By default, up-arrow and' !!       write(*,*)'  down-arrow go thru the history lines; left and right arrow' !!       write(*,*)'  keys and delete and just typing characters let you do' !!       write(*,*)'  simple editing. Far more input control is available.' !!       write(*,*)'  See the browser pages and man(1) pages for readline(3c).' !!       write(*,*)' ____________________________________________________________' !!       write(*,*)' Enter text and then edit it. \"q\" quits; \"h\" display history:' !! !!       do !!          call system_readline(line,'readline>') ! read editable input line !!          if(line.eq.'q') stop !!          call execute_command_line(trim(line),cmdstat=cstat,cmdmsg=sstat) !!       enddo !!    end program demo_system_readline !!##AUTHOR !!    John S. Urban !!##LICENSE !!    Public Domain !! !!    Although this interface to readline(3c) is released as Public Domain, !!    note that the Readline library itself is free software, distributed !!    under the terms of the [GNU] General Public License, version 2. SUBROUTINE system_readline ( line , prompt ) USE ISO_C_BINDING IMPLICIT NONE ! the routine that calls the C routine CHARACTER ( KIND = C_CHAR , LEN =* ), INTENT ( OUT ) :: line CHARACTER ( KIND = C_CHAR , LEN =* ), INTENT ( IN ) :: prompt ! trim to last non-blank character and append null for C CALL Freadline ( INT ( LEN ( line ), KIND = C_INT ), line , trim ( prompt ) // ACHAR ( 0 )) END SUBROUTINE system_readline END MODULE M_readline !=================================================================================================================================== !()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()= !===================================================================================================================================","tags":"","loc":"sourcefile/m_readline.f90.html"},{"title":"readline.f90 – M_readline","text":"Contents Programs demo_system_readline Source Code readline.f90 Source Code ! the test program program demo_system_readline use m_readline , only : system_readline implicit none character ( len = 256 ) :: line integer :: cstat character ( len = 256 ) :: sstat write ( * , * ) ' ____________________________________________________________' write ( * , * ) '  Your input lines are now editable using the GNU' write ( * , * ) '  readline(3C) procedure. By default, up-arrow and' write ( * , * ) '  down-arrow go thru the history lines; left and right arrow' write ( * , * ) '  keys and the delete key and just typing characters let you ' write ( * , * ) '  do simple editing. Far more input control is available.' write ( * , * ) '  See the man(1) page for readline(3c) for more information.' write ( * , * ) ' ____________________________________________________________' write ( * , * ) ' Enter commands and then edit them. \"q\" quits; \"h\" display history:' do call system_readline ( line , 'readline>' ) ! read editable input line if ( line . eq . 'q' ) stop call execute_command_line ( trim ( line ), cmdstat = cstat , cmdmsg = sstat ) enddo end program demo_system_readline","tags":"","loc":"sourcefile/readline.f90.html"},{"title":"demo_M_readline.f90 – M_readline","text":"Contents Programs demo_M_readline Source Code demo_M_readline.f90 Source Code program demo_M_readline use M_readline implicit none character ( len = 256 ) :: line integer :: cstat character ( len = 256 ) :: sstat write ( * , * ) ' ____________________________________________________________' write ( * , * ) '  Your input lines are now editable using the GNU' write ( * , * ) '  readline(3C) procedure. By default, up-arrow and' write ( * , * ) '  down-arrow go thru the history lines; left and right arrow' write ( * , * ) '  keys and delete and just typing characters let you do' write ( * , * ) '  simple editing. Far more input control is available.' write ( * , * ) '  See the browser pages and man(1) pages for readline(3c).' write ( * , * ) ' ____________________________________________________________' write ( * , * ) ' Enter text and then edit it. \"q\" quits; \"h\" display history:' do call system_readline ( line , 'readline>' ) ! read editable input line if ( line . eq . 'q' ) stop !call system(trim(line))    ! common extension call execute_command_line ( trim ( line ), cmdstat = cstat , cmdmsg = sstat ) ! f08 equivalent enddo end program demo_M_readline","tags":"","loc":"sourcefile/demo_m_readline.f90.html"},{"title":"demo_system_readline.f90 – M_readline","text":"Contents Programs demo_system_readline Source Code demo_system_readline.f90 Source Code program demo_system_readline use m_readline , only : system_readline implicit none character ( len = 256 ) :: line integer :: cstat character ( len = 256 ) :: sstat write ( * , * ) ' ____________________________________________________________' write ( * , * ) '  Your input lines are now editable using the GNU' write ( * , * ) '  readline(3C) procedure. By default, up-arrow and' write ( * , * ) '  down-arrow go thru the history lines; left and right arrow' write ( * , * ) '  keys and delete and just typing characters let you do' write ( * , * ) '  simple editing. Far more input control is available.' write ( * , * ) '  See the browser pages and man(1) pages for readline(3c).' write ( * , * ) ' ____________________________________________________________' write ( * , * ) ' Enter text and then edit it. \"q\" quits; \"h\" display history:' do call system_readline ( line , 'readline>' ) ! read editable input line if ( line . eq . 'q' ) stop call execute_command_line ( trim ( line ), cmdstat = cstat , cmdmsg = sstat ) enddo end program demo_system_readline","tags":"","loc":"sourcefile/demo_system_readline.f90.html"},{"title":"test_suite_M_readline.f90 – M_readline","text":"Contents Programs runtest Modules M_testsuite_M_readline Source Code test_suite_M_readline.f90 Source Code !=================================================================================================================================== !()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()= !=================================================================================================================================== module M_testsuite_M_readline use M_framework__verify use M_readline contains !TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT subroutine test_suite_M_readline () use M_framework__verify , only : unit_check_start , unit_check , unit_check_done , unit_check_good , unit_check_bad , unit_check_msg !! setup call test_system_readline () !! teardown end subroutine test_suite_M_readline !TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT subroutine test_system_readline () call unit_check_start ( 'system_readline' , msg = '' ) !!call unit_check('system_readline', 0.eq.0, 'checking',100) call unit_check_done ( 'system_readline' , msg = '' ) end subroutine test_system_readline !TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT end module M_testsuite_M_readline !TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT program runtest use M_framework__msg use M_framework__verify , only : unit_check , unit_check_start , unit_check_good , unit_check_bad , unit_check_done use M_framework__verify , only : unit_check_stop use M_testsuite_M_readline call test_suite_M_readline () call unit_check_stop () end program runtest !TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT","tags":"","loc":"sourcefile/test_suite_m_readline.f90.html"}]}