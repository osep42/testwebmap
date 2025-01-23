var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HEATMAPSBDPTARGETS_1 = new ol.format.GeoJSON();
var features_HEATMAPSBDPTARGETS_1 = format_HEATMAPSBDPTARGETS_1.readFeatures(json_HEATMAPSBDPTARGETS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HEATMAPSBDPTARGETS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HEATMAPSBDPTARGETS_1.addFeatures(features_HEATMAPSBDPTARGETS_1);
var lyr_HEATMAPSBDPTARGETS_1 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_HEATMAPSBDPTARGETS_1, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'HEAT MAP SBDP TARGETS'
            });
var format_AFP_Records_2 = new ol.format.GeoJSON();
var features_AFP_Records_2 = format_AFP_Records_2.readFeatures(json_AFP_Records_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFP_Records_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFP_Records_2.addFeatures(features_AFP_Records_2);
var lyr_AFP_Records_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AFP_Records_2, 
                style: style_AFP_Records_2,
                popuplayertitle: 'AFP_Records',
                interactive: true,
                title: '<img src="styles/legend/AFP_Records_2.png" /> AFP_Records'
            });
var format_AFP_Records2_3 = new ol.format.GeoJSON();
var features_AFP_Records2_3 = format_AFP_Records2_3.readFeatures(json_AFP_Records2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFP_Records2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFP_Records2_3.addFeatures(features_AFP_Records2_3);
var lyr_AFP_Records2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AFP_Records2_3, 
                style: style_AFP_Records2_3,
                popuplayertitle: 'AFP_Records2',
                interactive: true,
    title: 'AFP_Records2<br />\
    <img src="styles/legend/AFP_Records2_3_0.png" /> Influenced<br />\
    <img src="styles/legend/AFP_Records2_3_1.png" /> Less Influenced<br />\
    <img src="styles/legend/AFP_Records2_3_2.png" /> Threatened/Expansion<br />'
        });
var format_SerbisyoCaravanOngoing_4 = new ol.format.GeoJSON();
var features_SerbisyoCaravanOngoing_4 = format_SerbisyoCaravanOngoing_4.readFeatures(json_SerbisyoCaravanOngoing_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SerbisyoCaravanOngoing_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SerbisyoCaravanOngoing_4.addFeatures(features_SerbisyoCaravanOngoing_4);
var lyr_SerbisyoCaravanOngoing_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SerbisyoCaravanOngoing_4, 
                style: style_SerbisyoCaravanOngoing_4,
                popuplayertitle: 'Serbisyo Caravan Ongoing',
                interactive: true,
                title: '<img src="styles/legend/SerbisyoCaravanOngoing_4.png" /> Serbisyo Caravan Ongoing'
            });
var format_SerbisyoCaravanNotyetstarted_5 = new ol.format.GeoJSON();
var features_SerbisyoCaravanNotyetstarted_5 = format_SerbisyoCaravanNotyetstarted_5.readFeatures(json_SerbisyoCaravanNotyetstarted_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SerbisyoCaravanNotyetstarted_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SerbisyoCaravanNotyetstarted_5.addFeatures(features_SerbisyoCaravanNotyetstarted_5);
var lyr_SerbisyoCaravanNotyetstarted_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SerbisyoCaravanNotyetstarted_5, 
                style: style_SerbisyoCaravanNotyetstarted_5,
                popuplayertitle: 'Serbisyo Caravan Not yet started',
                interactive: true,
                title: '<img src="styles/legend/SerbisyoCaravanNotyetstarted_5.png" /> Serbisyo Caravan Not yet started'
            });
var format_SerbisyoCaravanCompleted_6 = new ol.format.GeoJSON();
var features_SerbisyoCaravanCompleted_6 = format_SerbisyoCaravanCompleted_6.readFeatures(json_SerbisyoCaravanCompleted_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SerbisyoCaravanCompleted_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SerbisyoCaravanCompleted_6.addFeatures(features_SerbisyoCaravanCompleted_6);
var lyr_SerbisyoCaravanCompleted_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SerbisyoCaravanCompleted_6, 
                style: style_SerbisyoCaravanCompleted_6,
                popuplayertitle: 'Serbisyo Caravan Completed',
                interactive: true,
                title: '<img src="styles/legend/SerbisyoCaravanCompleted_6.png" /> Serbisyo Caravan Completed'
            });
var format_GFDATAPOINTS_7 = new ol.format.GeoJSON();
var features_GFDATAPOINTS_7 = format_GFDATAPOINTS_7.readFeatures(json_GFDATAPOINTS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GFDATAPOINTS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GFDATAPOINTS_7.addFeatures(features_GFDATAPOINTS_7);
var lyr_GFDATAPOINTS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GFDATAPOINTS_7, 
                style: style_GFDATAPOINTS_7,
                popuplayertitle: 'GF DATA POINTS',
                interactive: true,
                title: '<img src="styles/legend/GFDATAPOINTS_7.png" /> GF DATA POINTS'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_HEATMAPSBDPTARGETS_1.setVisible(true);lyr_AFP_Records_2.setVisible(true);lyr_AFP_Records2_3.setVisible(true);lyr_SerbisyoCaravanOngoing_4.setVisible(true);lyr_SerbisyoCaravanNotyetstarted_5.setVisible(true);lyr_SerbisyoCaravanCompleted_6.setVisible(true);lyr_GFDATAPOINTS_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_HEATMAPSBDPTARGETS_1,lyr_AFP_Records_2,lyr_AFP_Records2_3,lyr_SerbisyoCaravanOngoing_4,lyr_SerbisyoCaravanNotyetstarted_5,lyr_SerbisyoCaravanCompleted_6,lyr_GFDATAPOINTS_7];
lyr_AFP_Records_2.set('fieldAliases', {'ID': 'ID', 'BARANGAY': 'BARANGAY', 'DECLARED_A': 'DECLARED_A', 'MUNICIPALI': 'MUNICIPALI', 'PROVINCE': 'PROVINCE', 'METHOD': 'METHOD', 'REMARKS': 'REMARKS', 'LGU_INVOLV': 'LGU_INVOLV', 'DATEOFAPPR': 'DATEOFAPPR', 'AreaI': 'AreaI', 'YEAR': 'YEAR', });
lyr_AFP_Records2_3.set('fieldAliases', {'ID': 'ID', 'BARANGAY': 'BARANGAY', 'DECLARED_A': 'DECLARED_A', 'MUNICIPALI': 'MUNICIPALI', 'PROVINCE': 'PROVINCE', 'METHOD': 'METHOD', 'REMARKS': 'REMARKS', 'LGU_INVOLV': 'LGU_INVOLV', 'DATEOFAPPR': 'DATEOFAPPR', 'AreaI': 'AreaI', 'AFFECTATIO': 'AFFECTATIO', });
lyr_SerbisyoCaravanOngoing_4.set('fieldAliases', {'ID': 'ID', 'BARANGAY': 'BARANGAY', 'DECLARED_A': 'DECLARED_A', 'MUNICIPALI': 'MUNICIPALI', 'PROVINCE': 'PROVINCE', 'METHOD': 'METHOD', 'REMARKS': 'REMARKS', 'LGU_INVOLV': 'LGU_INVOLV', 'DATEOFAPPR': 'DATEOFAPPR', 'AreaI': 'AreaI', 'AreaI1': 'AreaI1', });
lyr_SerbisyoCaravanNotyetstarted_5.set('fieldAliases', {'ID': 'ID', 'BARANGAY': 'BARANGAY', 'DECLARED_A': 'DECLARED_A', 'MUNICIPALI': 'MUNICIPALI', 'PROVINCE': 'PROVINCE', 'METHOD': 'METHOD', 'REMARKS': 'REMARKS', 'LGU_INVOLV': 'LGU_INVOLV', 'DATEOFAPPR': 'DATEOFAPPR', 'AreaI': 'AreaI', 'AreaI1': 'AreaI1', });
lyr_SerbisyoCaravanCompleted_6.set('fieldAliases', {'ID': 'ID', 'BARANGAY': 'BARANGAY', 'DECLARED_A': 'DECLARED_A', 'MUNICIPALI': 'MUNICIPALI', 'PROVINCE': 'PROVINCE', 'METHOD': 'METHOD', 'REMARKS': 'REMARKS', 'LGU_INVOLV': 'LGU_INVOLV', 'DATEOFAPPR': 'DATEOFAPPR', 'AreaI': 'AreaI', 'AreaI1': 'AreaI1', });
lyr_GFDATAPOINTS_7.set('fieldAliases', {'GF_Name': 'GF_Name', 'X': 'X', 'Y': 'Y', });
lyr_AFP_Records_2.set('fieldImages', {'ID': '', 'BARANGAY': '', 'DECLARED_A': '', 'MUNICIPALI': '', 'PROVINCE': '', 'METHOD': '', 'REMARKS': '', 'LGU_INVOLV': '', 'DATEOFAPPR': '', 'AreaI': '', 'YEAR': '', });
lyr_AFP_Records2_3.set('fieldImages', {'ID': 'TextEdit', 'BARANGAY': 'TextEdit', 'DECLARED_A': 'TextEdit', 'MUNICIPALI': 'TextEdit', 'PROVINCE': 'TextEdit', 'METHOD': 'TextEdit', 'REMARKS': 'TextEdit', 'LGU_INVOLV': 'TextEdit', 'DATEOFAPPR': 'TextEdit', 'AreaI': 'TextEdit', 'AFFECTATIO': 'TextEdit', });
lyr_SerbisyoCaravanOngoing_4.set('fieldImages', {'ID': '', 'BARANGAY': '', 'DECLARED_A': '', 'MUNICIPALI': '', 'PROVINCE': '', 'METHOD': '', 'REMARKS': '', 'LGU_INVOLV': '', 'DATEOFAPPR': '', 'AreaI': '', 'AreaI1': '', });
lyr_SerbisyoCaravanNotyetstarted_5.set('fieldImages', {'ID': '', 'BARANGAY': '', 'DECLARED_A': '', 'MUNICIPALI': '', 'PROVINCE': '', 'METHOD': '', 'REMARKS': '', 'LGU_INVOLV': '', 'DATEOFAPPR': '', 'AreaI': '', 'AreaI1': '', });
lyr_SerbisyoCaravanCompleted_6.set('fieldImages', {'ID': 'TextEdit', 'BARANGAY': 'TextEdit', 'DECLARED_A': 'TextEdit', 'MUNICIPALI': 'TextEdit', 'PROVINCE': 'TextEdit', 'METHOD': 'TextEdit', 'REMARKS': 'TextEdit', 'LGU_INVOLV': 'TextEdit', 'DATEOFAPPR': 'TextEdit', 'AreaI': 'TextEdit', 'AreaI1': 'TextEdit', });
lyr_GFDATAPOINTS_7.set('fieldImages', {'GF_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_AFP_Records_2.set('fieldLabels', {'ID': 'no label', 'BARANGAY': 'inline label - visible with data', 'DECLARED_A': 'no label', 'MUNICIPALI': 'no label', 'PROVINCE': 'no label', 'METHOD': 'no label', 'REMARKS': 'no label', 'LGU_INVOLV': 'no label', 'DATEOFAPPR': 'no label', 'AreaI': 'no label', 'YEAR': 'inline label - visible with data', });
lyr_AFP_Records2_3.set('fieldLabels', {'ID': 'no label', 'BARANGAY': 'inline label - visible with data', 'DECLARED_A': 'no label', 'MUNICIPALI': 'no label', 'PROVINCE': 'no label', 'METHOD': 'no label', 'REMARKS': 'no label', 'LGU_INVOLV': 'no label', 'DATEOFAPPR': 'no label', 'AreaI': 'no label', 'AFFECTATIO': 'inline label - visible with data', });
lyr_SerbisyoCaravanOngoing_4.set('fieldLabels', {'ID': 'no label', 'BARANGAY': 'inline label - always visible', 'DECLARED_A': 'no label', 'MUNICIPALI': 'no label', 'PROVINCE': 'no label', 'METHOD': 'no label', 'REMARKS': 'no label', 'LGU_INVOLV': 'no label', 'DATEOFAPPR': 'no label', 'AreaI': 'no label', 'AreaI1': 'no label', });
lyr_SerbisyoCaravanNotyetstarted_5.set('fieldLabels', {'ID': 'no label', 'BARANGAY': 'inline label - always visible', 'DECLARED_A': 'no label', 'MUNICIPALI': 'no label', 'PROVINCE': 'no label', 'METHOD': 'no label', 'REMARKS': 'no label', 'LGU_INVOLV': 'no label', 'DATEOFAPPR': 'no label', 'AreaI': 'no label', 'AreaI1': 'no label', });
lyr_SerbisyoCaravanCompleted_6.set('fieldLabels', {'ID': 'no label', 'BARANGAY': 'inline label - always visible', 'DECLARED_A': 'no label', 'MUNICIPALI': 'no label', 'PROVINCE': 'no label', 'METHOD': 'no label', 'REMARKS': 'no label', 'LGU_INVOLV': 'no label', 'DATEOFAPPR': 'no label', 'AreaI': 'no label', 'AreaI1': 'no label', });
lyr_GFDATAPOINTS_7.set('fieldLabels', {'GF_Name': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', });
lyr_GFDATAPOINTS_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});