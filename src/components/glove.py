import pandas as pd
import csv

class Patient(object):
    def __init__(self):
        self.patient_info = []
        self.visit_dates = []
        self.marker_dataset = [] # stores markers and their values

    def get_patient_info(self):
        return self.patient_info
    def get_visit_dates(self):
        return self.visit_dates
    def get_marker_dataset(self):
        return self.marker_dataset # create the table to convert to csv

class Marker (object): # singular marker object
    def __init__(self, marker, marker_units, marker_value, visit_date, drag_count):
        # sample value:

        # marker = 'hemo a1c'
        # marker_value = 20
        # date = 2-17-2023

        # HIDDEN: drag_count = 0

        # len(values) and len(dates) should have a 1-to-1 correspondence

        self.marker = marker # str datatype, name of marker
        self.marker_units = marker_units # str datatype, marker units
        self.marker_value = marker_value # arr datatype, list of marker values per date of visit
        self.visit_date = visit_date # arr data type, list of dates
        self.drag_count = drag_count # int datatype, count of drags

    def get_marker(self):
        return self.marker

    def get_marker_units(self):
        return self.marker_units

    def get_marker_values(self):
        return self.marker_value

    def get_visit_date(self):
        return self.visit_date
    
    def get_drag_count(self):
        return self.drag_count

class Glove:

    def __init__(self, patient):
        self.patient = Patient(patient)
        self.marker_list = []

    def set_marker_list(self):
        for marker in self.patient.marker_dataset:
            self.marker_list.append(self.patient.marker_dataset[marker].get_marker())
        return self.marker_list

    def get_dataset(self):
        # make csv file from patient dataset
        
        return self.patient.get_marker_dataset()


    def rank_dataset(self):
        
        return
