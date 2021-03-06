function output=mainTest(inputFile, outputFile)

if nargin<1, inputFile='input.txt'; end
if nargin<2, outputFile='output.matlab.txt'; end

% Read input file
fprintf('Reading input file "%s"...\n', inputFile);
output={}; id=1;
fidInput=fopen(inputFile, 'r');
if fidInput<0, error('Cannot open input file "%s"!', inputFile); end
while ~feof(fidInput)
	row=str2num(fgetl(fidInput));
	data=[];
	for i=1:row
		data(i,:)=str2num(fgetl(fidInput));
	end
	dataSet{i}=data;
%	output{id}=hyperplaneFitViaTls(data);		% You can comment out this line (and uncomment the next line) to test ellipseFitSP.p
	output{id}=hyperplaneFitViaTlsSP(data, 1); title(sprintf('Case id=%d', id));
	fprintf('id=%d, row=%d\n', id, row); id=id+1;
end
fclose(fidInput);

% Write output file
fprintf('Writing output file "%s"...\n', outputFile);
fidOutput=fopen(outputFile, 'w');
if fidOutput<0, error('Cannot open output file "%s"!', outputFile); end
for i=1:length(output)
	fprintf(fidOutput, '%f ', output{i});
	fprintf(fidOutput, '\n');
end
fclose(fidOutput);