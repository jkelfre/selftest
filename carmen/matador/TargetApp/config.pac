# This file is used by runtests.py, and specifies the binary, 
# default checkout, users, and run-dependent text etc. for Pairing (PAC) 

# ---------------- Values required by the framework -------------------

# Python configuration module to use. The configuration "default" is always available
# Otherwise, provide any module you like that implements a getConfig(optionMap) method
config_module:matador
queue_system_module:${QUEUE_SYSTEM}

# Binary (relative to checkout) to be used
binary:${CARMSYS}/bin/MATADORbatch.sh

default_interface:console

# Check-out to use if no -c option is specified.
# This will look globally if it starts with a /, locally 
# under the same root as the Testing directory otherwise
checkout_location:/carm/proj/texttest/
default_checkout:selftest_data

# run-dependent text for each file produced
# Please add text to remove from comparison files
# separated from the file concerned by a semicolon
[run_dependent_text]
errors:Error! Pid
errors:locale
errors:cpu time
output:Cpu time
output:Optimization time
output:cpu time
output:Date/Time
output:Host machine
output:clock time
output:locale
output:Picador library version..:
output:Picador library date
output:Generation time
output:RU_FRT
output:CARMSYS
output:CARMUSR
output:CARMTMP
output:Using Filer to load SubPlan
output:SUBPLAN
output:Subplan
output:ARGS
output:Written Solution to
[end]

# Full name. If not present, capitalised extension is used
full_name:Picador

# Versions which exist for environmental or other purposes and should not be offered as save options
unsaveable_version:i386_linux
unsaveable_version:master

# Files to be treated as input, if present
link_test_path:secret_parameters.etab

# Collect the solution
[collate_file]
solution:APC_FILES/best_solution
[end]

# ---------------- Values required by the Carmen module -------------------

# What needs to be built by the rule compiler
rave_name:matador

# The architecture that runs without a version ID. If you run on other architecture, you will
# get given version ${ARCH}, as well as any versions you may have specified
default_architecture:i386_linux

# Things to build
[build_targets]
link:${TEXTTEST_CHECKOUT}/Optimization/Picador/Program
product:${TEXTTEST_CHECKOUT}/Optimization/Picador
codebase:${TEXTTEST_CHECKOUT}/Optimization
rave:${TEXTTEST_CHECKOUT}/Rules_and_Reports
rave:${TEXTTEST_CHECKOUT}/Optimization/Picador/Program

# ---------------- Values needed to run in batch mode -------------------

# For each "special batch" run, specify recipients, time limit, architectures and versions 
# Not present means $USER as recipient, no time limit, all versions and all architectures accepted
[batch_recipients]
default:carmen.raveopt_tests
local:$USER

[batch_version]
default:master
default:i386_linux


